<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\error;

class UserController extends Controller
{

    public function index()
    {
        return User::all();
    }

    public function teachers()
    {
        $teachers = Teacher::all();
        $array = array();

        foreach ($teachers as $teacher) {
            array_push($array, $teacher->user);
        }

        return $array;
    }

    public function students()
    {
        $students = Student::all();
        $array = array();

        foreach ($students as $student) {
            array_push($array, $student->user);
        }

        return $array;
    }

    public function show($user_ci)
    {
        $user = User::where("user_ci", $user_ci)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $info = Student::where("user_ci", $user_ci)->first();
        if ($info) {
            return array_merge($user->toArray(), $info->toArray());;
        }

        $info = Teacher::where("user_ci", $user_ci)->first();
        if ($info) {
            return array_merge($user->toArray(), $info->toArray());;
        }

        return $user;
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'user_ci' => ['bail', 'digits_between:7,8', 'integer', 'unique:users', 'regex:/^\S+$/'],
                'user_first_name' => ['required', 'string', 'max:255', 'regex:/^\S+$/'],
                'user_middle_name' => ['string', 'max:255', 'regex:/^\S+$/'],
                'user_first_surname' => ['required', 'string', 'max:255', 'regex:/^\S+$/'],
                'user_second_surname' => ['string', 'max:255', 'regex:/^\S+$/'],
                'user_email' => ['bail', 'required', 'email', 'max:255', 'unique:users', 'regex:/^[\w\.-]+@(correo\.unimet\.edu\.ve|unimet\.edu\.ve)$/'],
                'user_birthdate' => ['required', 'date', 'before:18 years ago'],
                'user_gender' => ['required', 'string', 'max:1', 'in:M,F,O'],
                'username' => ['bail', 'required', 'string', 'min:8', 'max:255', 'unique:users', 'regex:/^\S+$/'],
                'password' => ['required', 'string', 'min:8', 'regex:/^\S+$/'],
            ]);

            // Crear el usuario
            $data = $request->all();
            $data['password'] = Hash::make($request->password);
            $user = User::create($data);

            // Creación de student/teacher
            if (str_contains($data['user_email'], '@correo.unimet.edu.ve')) {
                $student = Student::create([
                    "user_ci" => $data["user_ci"],
                    "student_card_id" => now()->format('Ymd') . str_pad(mt_rand(0, 999), 3, '0', STR_PAD_LEFT),
                    "student_enrollment_date" => now()->format('d-m-y')
                ]);
                $student->save();
            }
            // Creación de teacher
            else {
                $student = Teacher::create([
                    "user_ci" => $data["user_ci"],
                    "teacher_card_id" => now()->format('Ymd') . str_pad(mt_rand(0, 999), 3, '0', STR_PAD_LEFT),
                    "teacher_hire_date" => now()->format('d-m-y')
                ]);
                $student->save();
            }

            // Creación de tokens
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer'
            ], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'user_email' => ['required', 'email', 'max:255', 'regex:/^[\w\.-]+@(correo\.unimet\.edu\.ve|unimet\.edu\.ve)$/'],
                'password' => ['required', 'string', 'min:8', 'regex:/^\S+$/']
            ]);

            if (!Auth::attempt($request->only('user_email', 'password'))) {
                return response()->json([
                    'message' => 'Invalid login details'
                ], 401);
            }

            $user = $request->user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
            ], 200);
            
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ], 200);
    }

    public function currentUser(){
        try {
            /** @var \App\Models\User $user */
            $user = Auth::user();;

            if (!$user) {
                return response()->json(['error' => "Not found session"], 400);
            }
            
            return response()->json($user->user_ci, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    // ********** Protegida: SÓLO EL MISMO USUARIO **********
    public function update(Request $request, $user_ci)
    {
        try {
            /** @var \App\Models\User $user */
            $user = Auth::user();;

            if (!$user || $user->user_ci != $user_ci) {
                return response()->json(['error' => "Usuario no autorizado para actualizar otro usuario"], 401);
            }

            if ($request->has('password')) {
                $user->password = Hash::make($request->password);
            }

            $user->update($request->except(['password'])); // Excluye 'password' para evitar sobrescritura accidental
            return response()->json($user, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    // ********** Protegida: SÓLO EL MISMO USUARIO **********
    public function destroy($user_ci)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();;

        if (!$user || $user->user_ci != $user_ci) {
            return response()->json(['error' => "Usuario no autorizado para eliminar otro usuario"], 401);
        }

        $user->delete();
        return response()->json($user, 204);
    }
}
