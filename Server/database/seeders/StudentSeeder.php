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
        Student::create([
            "user_ci" => 27790027,
            "student_card_id" => 20181110231,
            "student_enrollment_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
        Student::create([
            "user_ci" => 30085424,
            "student_card_id" => 20181110232,
            "student_enrollment_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
        Student::create([
            "user_ci" => 29887224,
            "student_card_id" => 20181110233,
            "student_enrollment_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
        Student::create([
            "user_ci" => 29945196,
            "student_card_id" => 20181110234,
            "student_enrollment_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
    }
}
