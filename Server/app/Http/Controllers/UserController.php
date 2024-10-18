<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        return "200 OK";
    }

    public function show($username)
    {
        
        return $username;
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
