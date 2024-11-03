<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Term;
use Illuminate\Http\Request;

class TermController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $term = Term::all();
        return response()->json($term, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'academic_year_id' => 'required|integer',
            'term_id' => 'required|integer|in:1,2,3,4',
            'term_name' => 'required|string|max:255',
            'term_start_date' => 'required|date:d-m-Y',
            'term_end_date' => 'required|date:d-m-Y',
            'term_type' => 'required|string|max:255',
        ]);

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
