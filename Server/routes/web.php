<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\UserController;
use Database\Factories\AcademicYearFactory;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// User API
Route::apiResource('api/user', UserController::class)
    ->parameters([
        "user" => "user_ci"
    ]);

// AcademicYear API
Route::apiResource('api/academic-year', AcademicYearFactory::class)->parameters([
    ""
]);
