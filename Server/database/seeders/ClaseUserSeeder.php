<?php

namespace Database\Seeders;

use App\Models\Clase;
use App\Models\ClaseUser;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClaseUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            if ($user->student) {
                $this->handleStudent($user->student);
            }
            if ($user->teacher){
                $this->handleTeacher($user->teacher);
            }
        }
    }

    public function handleStudent(Student $student)
    {
        $sections = $student->sections;
        foreach ($sections as $section) {
            $classes = $section->classes;
            foreach ($classes as $class) {
                ClaseUser::create([
                    'class_id' => $class->id,
                    'user_id' => $student->user_ci,
                    'attendance_arrival' => null,
                    'attendance_departure' => null,
                    'attendance_rating' => null
                ]);
            }
        }

    }

    public function handleTeacher(Teacher $teacher)
    {
        $sections = $teacher->sections;
        foreach ($sections as $section) {
            $classes = $section->classes;
            foreach ($classes as $class) {
                ClaseUser::create([
                    'class_id' => $class->id,
                    'user_id' => $teacher->user_ci,
                    'attendance_arrival' => null,
                    'attendance_departure' => null,
                    'attendance_rating' => null
                ]);
            }
        }

    }
}
