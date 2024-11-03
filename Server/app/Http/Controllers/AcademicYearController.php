<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AcademicYear;
use App\Models\Term;
use Illuminate\Http\Request;

class AcademicYearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $academicYear = AcademicYear::all();
        return response()->json($academicYear, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'academic_year_id' => 'required|integer',
            'term_id' => 'required|integer',
            'term_name' => 'required|string|max:255',
            'term_start_date' => 'required|date',
            'term_end_date' => 'required|date',
            'term_type' => 'required|string|max:255',
        ]);

        // Verificar que la combinación no existe antes de insertar
        $exists = Term::where('academic_year_id', $request->academic_year_id)
            ->where('term_id', $request->term_id)
            ->exists();

        if ($exists) {
            return  response()->json([
                'message' => 'The term already exists',
                'Term' => $exists
            ], 201);
        }

        // Crear el nuevo término si no existe
        $created = Term::create($validated);

        return response()->json($created, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
