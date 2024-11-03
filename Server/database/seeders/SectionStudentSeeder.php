<?php

namespace Database\Seeders;

use App\Models\Section;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionStudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $section = Section::find(1);
        $students = Student::all();

        foreach ($students as $student) {
            $section->students()->attach($student->user_ci, ['status' => 'In Progress']);
        }
    }
}
