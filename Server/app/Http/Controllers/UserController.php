<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        $user = User::all();
        return $user;
    }

    public function show(User $user)
    {
        return $user;
    }

    public function store(Request $request)
    {
        return "";        
    }

    public function update()
    {
        return "";        
    }

    public function destroy()
    {
        return "";        
    }
}
