<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\ClaseUserController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// User API
Route::apiResource('api/user', UserController::class)
    ->parameters([
        "user" => "user_ci"
    ]);

// Attendance API
Route::apiResource('api/attendance', ClaseUserController::class);