<?php

use App\Http\Controllers\EstudianteController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// API's PARA MANEJAR EL MODELO: Estudiante
Route::get('/api/user',             [EstudianteController::class, 'index']);
Route::get('/api/user/{id}',        [EstudianteController::class, 'getUser']);
Route::post('/api/user/create',     [EstudianteController::class, 'addUser']);
Route::patch('/api/user/update',    [EstudianteController::class, 'updateUser']);
Route::delete('/api/user/delete',   [EstudianteController::class, 'deleteUser']);
