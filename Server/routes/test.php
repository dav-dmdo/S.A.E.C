<?php

use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\UserController;
use App\Models\AcademicYear;
use App\Models\Clase;
use App\Models\Section;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/sections', function () {

    $sections = Section::all();
    return response()->json([
        'message' => 'Hello World!',
        'sections' => $sections
    ]);
});

Route::get('/users', function () {

    $users = User::all();
    return response()->json([
        'message' => 'Hello World!',
        'users' => $users
    ]);
});

Route::get('/students', function () {

    $students = Student::all();
    return response()->json([
        'message' => 'Hello World!',
        'students' => $students
    ]);
});

Route::get('/academic-years', function () {

    $academicYears = AcademicYear::all();
    return response()->json([
        'message' => 'Hello World!',
        'academicYears' => $academicYears
    ]);
});

Route::get('/academic-year/{id}', function ($id) {

    $academicYear = AcademicYear::find($id);
    return response()->json([
        'message' => 'Hello World!',
        'academicYear' => $academicYear
    ]);
});

Route::get('/section/{id}/students', function ($id) {

    $section = Section::find($id);
    $students = $section->students;
    return response()->json([
        'message' => 'Hello World!',
        'students' => $students
    ]);

});

Route::get('/section/{id}/student/{ci}', function ($id, $ci) {

    $section = Section::find($id);
    $student = $section->students()->find($ci);
    return response()->json([
        'message' => 'Hello World!',
        'student' => $student
    ]);

});

Route::get('/classes-year', function () {

    $classes = Clase::all();
    // $year = $classes[0]->section->term->academicYear;
    $year = $classes[0]->section->academicYear; // funciona de las dos formas
    return response()->json([
        'message' => 'Hello World!',
        'classes' => $year
    ]);
});

Route::get('/year-sections', function () {

    $academicYear = AcademicYear::find(3);
    $terms = $academicYear->terms;
    $sections = $terms[2]->sections;

    return response()->json([
        'message' => 'Hello World!',
        'classes' => $sections
    ]);
});
