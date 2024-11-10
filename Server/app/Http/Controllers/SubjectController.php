<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::all();
        return $subjects;
    }

    public function show($subject_id)
    {
        $subject = Subject::where("subject_id", strtoupper($subject_id))->first();

        if (!$subject) {
            return response()->json(['error' => 'Subject not found'], 404);
        }

        return $subject;
    }

    public function store(Request $request)
    {
        return "Not avaliable";
    }

    public function update(Request $request, $id)
    {
        return "Not avaliable";
    }

    public function destroy($user_ci)
    {
        return "Not avaliable";
    }
}
