<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// User API's
Route::apiResource('api/user', UserController::class)
    ->parameters([
        "user" => "user_ci"
    ]);
