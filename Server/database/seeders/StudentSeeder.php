<?php

namespace Database\Seeders;

use App\Models\Student;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Student::create([
            "user_ci" => 27302014,
            "student_card_id" => 20181110230,
            "student_enrollment_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
    }
}
