<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\ClaseUserController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "";
});

// User API
Route::get('api/user', [UserController::class, 'index']);
Route::get('api/user/students', [UserController::class, 'students']);
Route::get('api/user/teachers', [UserController::class, 'teachers']);
Route::get('api/user/{user_ci}', [UserController::class, 'show']);
Route::post('api/user', [UserController::class, 'store']);
Route::post('/api/user/login', [UserController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/api/user/logout', [UserController::class, 'logout']);
    // Show: Route to see details of current user
    // Update: Route to update information
    // Destroy: Route to delete the account
});

// Attendance API
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('api/attendance', ClaseUserController::class);
});
