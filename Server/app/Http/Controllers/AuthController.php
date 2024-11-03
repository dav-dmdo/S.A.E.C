<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'user_ci' => 'required|integer',
            'user_first_name' => 'required|string|max:255|regex:/^\S+$/',
            'user_middle_name' => 'string|max:255|regex:/^\S+$/',
            'user_first_surname' => 'required|string|max:255|regex:/^\S+$/',
            'user_second_surname' => 'string|max:255|regex:/^\S+$/',
            'user_email' => 'required|string|email|max:255|unique:users|regex:/^\S+$/',
            'user_birthdate' => 'required|date',
            'user_gender' => 'required|string|max:1|in:M,F,O',
            'username' => 'required|string|max:255|regex:/^\S+$/',
            'password' => 'required|string|min:8|confirmed',
        ]);


        $exists = User::where('user_ci', $request->user_ci)
            ->orWhere('user_email', $request->user_email)
            ->exists();

        if ($exists) {

            return  response()->json([
                'message' => 'The user already exists',
                'user' => $exists
            ], 409);
        }

        $user = User::create([
            'user_ci' => $request->user_ci,
            'user_first_name' => $request->user_first_name,
            'user_middle_name' => $request->user_middle_name,
            'user_first_surname' => $request->user_first_surname,
            'user_second_surname' => $request->user_second_surname,
            'user_email' => $request->user_email,
            'user_birthdate' => $request->user_birthdate,
            'user_gender' => $request->user_gender,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        // $token = $user->createToken('authToken')->plainTextToken;

        // return response()->json([
        //     'access_token' => $token,
        //     'token_type' => 'Bearer',
        //     'user' => $user,
        // ], 201);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'user_email' => 'required|email',
            'password' => 'required',
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

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ], 200);
    }
}
