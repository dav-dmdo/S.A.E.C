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

    // Register
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

            // Creación de tokens
            // $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user' => $user,
                // 'access_token' => $token,
                // 'token_type' => 'Bearer'
            ], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function update(Request $request, $user_ci)
    {
        $user = User::where("user_ci", $user_ci)->first();

        // Existencia del usuario
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Lógica
        if ($request->has('password')) {
            $password = Hash::make($request->password);
            $user->password = $password;
            $user->save();
            return response()->json($user, 201);
        } else {
            $user->update($request->all());
            $user->save();
            return response()->json($user, 201);
        }
    }

    // Login
    public function login(Request $request)
    {
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
    }

    // logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ], 200);
    }

    public function destroy($user_ci)
    {
        $user = User::where("user_ci", $user_ci)->first();;

        // Existencia del usuario
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json($user, 204);
    }
}
