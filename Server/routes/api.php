<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/v1/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/v1/register', [AuthController::class, 'register']);
Route::post('/v1/login', [AuthController::class, 'login']);

// Rutas protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/v1/logout', [AuthController::class, 'logout']);
    Route::get('/v1/user', function (Request $request) {
        return $request->user();
    });
});