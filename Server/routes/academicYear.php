<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\UserController;
use App\Models\AcademicYear;
use Illuminate\Support\Facades\Route;

Route::get('/', [AcademicYearController::class, 'index']);
Route::get('/academic-year/{id}', [AcademicYearController::class, 'show']);
Route::post('/academic-year', [AcademicYearController::class, 'store']);
Route::put('/academic-year/{id}', [AcademicYearController::class, 'update']);
Route::delete('/academic-year/{id}', [AcademicYearController::class, 'destroy']);