<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 5 USUARIOS DE TIPO ESTUDIANTES
        for ($i = 0; $i < 5; $i++) {
            $user = User::factory()->create();
            Student::factory()->create([
                'user_ci' => $user->user_ci
            ]);
        };

        // 5 USUARIOS DE TIPO PROFESORES
        for ($i = 0; $i < 5; $i++) {
            $user = User::factory()->create();
            Teacher::factory()->create([
                'user_ci' => $user->user_ci
            ]);
        };
    }
}
