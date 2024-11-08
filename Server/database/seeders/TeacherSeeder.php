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
            "user_ci" => 14567890,
            "teacher_card_id" => 20121110230,
            "teacher_hire_date" => Carbon::create(2012, 9, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 17894523,
            "teacher_card_id" => 20130910865,
            "teacher_hire_date" => Carbon::create(2013, 9, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 15678934,
            "teacher_card_id" => 20140710456,
            "teacher_hire_date" => Carbon::create(2014, 7, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 12345678,
            "teacher_card_id" => 20150910214,
            "teacher_hire_date" => Carbon::create(2015, 9, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 16543210,
            "teacher_card_id" => 20160810879,
            "teacher_hire_date" => Carbon::create(2016, 8, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 14567832,
            "teacher_card_id" => 20170910567,
            "teacher_hire_date" => Carbon::create(2017, 9, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 19876543,
            "teacher_card_id" => 20180910456,
            "teacher_hire_date" => Carbon::create(2018, 9, 1)->format('d-m-y'),
        ]);
        
        Teacher::create([
            "user_ci" => 10000000,
            "teacher_card_id" => 20100910987,
            "teacher_hire_date" => Carbon::create(2010, 9, 1)->format('d-m-y'),
        ]);
    }
}
