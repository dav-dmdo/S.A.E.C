<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\ClaseUserController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "";
});

// User API
Route::get('api/user', [UserController::class, 'index']);
Route::post('api/user', [UserController::class, 'store']);
Route::post('/api/user/login', [UserController::class, 'login']);
Route::get('api/user/students', [UserController::class, 'students']);
Route::get('api/user/teachers', [UserController::class, 'teachers']);
Route::get('api/user/{user_ci}', [UserController::class, 'show']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/api/user/logout', [UserController::class, 'logout']);
    Route::put('/api/user/{user_ci}', [UserController::class, 'update']);
    Route::delete('/api/user/{user_ci}', [UserController::class, 'destroy']);
});

// Subject API
Route::get('api/subject', [SubjectController::class, 'index']);
Route::get('api/subject/{subject_id}', [SubjectController::class, 'show']);

// Attendance API
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('api/attendance', ClaseUserController::class);
});
