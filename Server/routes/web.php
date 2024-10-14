<?php

use App\Http\Controllers\EstudianteController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// API's PARA MANEJAR EL MODELO: Estudiante
Route::get('/API/user',             [EstudianteController::class, 'index']);
Route::get('/API/user/{id}',        [EstudianteController::class, 'getUser']);
Route::post('/API/user/create',     [EstudianteController::class, 'addUser']);
Route::put('/API/user/update',      [EstudianteController::class, 'updateUser']);
Route::delete('/API/user/delete',   [EstudianteController::class, 'deleteUser']);
