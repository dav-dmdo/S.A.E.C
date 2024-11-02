<?php

namespace Database\Seeders;

use App\Models\Teacher;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Teacher::create([
            "user_ci" => 123,
            "teacher_card_id" => 123,
            "teacher_hire_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
    }
}
