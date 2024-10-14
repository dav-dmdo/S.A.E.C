<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    public function index(){
        return "Mostrando todos los usuarios...";
    }

    public function getUser($id){
        return "Usuario ID:{$id}";
    }

    public function addUser($id){
        return redirect("/");
        // return "Añadiendo usuario ID:{$id}";
    }

    public function updateUser($id){
        return "Actualizando usuario ID:{$id}";
    }

    public function deleteUser($id){
        return "Eliminando usuario ID:{$id}";
    }
}
