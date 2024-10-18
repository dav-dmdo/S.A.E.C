<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    // /api/user
    public function index()
    {
        return [
            "code" => "200",
            "message" => "Se han mostrado todos los usuarios!"
        ];
    }

    // /api/user/{id}   | FALTA LA LÓGICA
    public function searchUser($id)
    {
        // 1. Se extrañe la info de la solicitud HTTP/POST
        

        // ... LÓGICA ...
        $sucess = true;

        // 9. Respuesta
        if ($sucess) {
            return [
                "code" => "200",
                "message" => "El usuario existe!",
                "id" => $id
            ];
        } else {
            return [
                "code" => "400",
                "message" => "El usuario no existe!",
                "id" => $id
            ];
        }
    }

    // /api/user/create | FALTA LA LÓGICA
    public function addUser(Request $req)
    {
        // 1. Se extrañe la info de la solicitud HTTP/POST
        $id = $req->input("id");

        // ... LÓGICA ...
        $sucess = true;

        // 9. Respuesta
        if ($sucess) {
            return [
                "code" => "200",
                "message" => "El usuario se agregó correctamente!",
                "id" => $id
            ];
        } else {
            return [
                "code" => "400",
                "message" => "El usuario no se agregó!",
                "id" => $id
            ];
        }
    }

    // /api/user/update | FALTA LA LÓGICA
    public function updateUser(Request $req)
    {
        // 1. Se extrañe la info de la solicitud HTTP/PATCH
        $id = $req->input("id");

        // ... LÓGICA ...
        $sucess = true;

        // 9. Respuesta
        if ($sucess) {
            return [
                "code" => "200",
                "message" => "El usuario se actualizó!",
                "id" => $id
            ];
        } else {
            return [
                "code" => "400",
                "message" => "El usuario no se actualizó!",
                "id" => $id
            ];
        }
    }

    // /api/user/delete | FALTA LA LÓGICA
    public function deleteUser(Request $req)
    {
        // 1. Se extrañe la info de la solicitud HTTP/DELETE
        $id = $req->input("id");

        // ... LÓGICA ...
        $sucess = true;

        // 9. Respuesta
        if ($sucess) {
            return [
                "code" => "200",
                "message" => "El usuario se eliminó!",
                "id" => $id
            ];
        } else {
            return [
                "code" => "400",
                "message" => "El usuario no se eliminó!",
                "id" => $id
            ];
        }
    }
}
