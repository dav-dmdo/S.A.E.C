<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\error;

class UserController extends Controller
{

    public function index()
    {
        return User::all();
    }

    public function show($user_id)
    {
        $user = User::find($user_id);
        return $user;
    }

    public function store(Request $request)
    {
        try {
            // Crear el usuario
            $data = $request->all();
            $data['password'] = Hash::make($request->password);

            // Aquí se supone que 'user_id' se debe incluir en la creación del usuario
            $user = User::create($data);
            $user['user_id'] = $data["user_id"];

            return response()->json($user, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    public function update(Request $request, $user_id)
    {
        $user = User::find($user_id);

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

    public function destroy(Request $request, $user_id)
    {
        $user = User::find($user_id);

        // Existencia del usuario
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json($user, 204);
    }
}
