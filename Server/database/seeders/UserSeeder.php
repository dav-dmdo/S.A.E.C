<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // // 5 USUARIOS DE TIPO ESTUDIANTES
        // for ($i = 0; $i < 5; $i++) {
        //     $user = User::factory()->create();
        //     Student::factory()->create([
        //         'user_ci' => $user->user_ci
        //     ]);
        // };

        // // 5 USUARIOS DE TIPO PROFESORES
        // for ($i = 0; $i < 5; $i++) {
        //     $user = User::factory()->create();
        //     Teacher::factory()->create([
        //         'user_ci' => $user->user_ci
        //     ]);
        // };

        User::create([
            "user_ci" => 27302014,
            "user_first_name" => 'David',
            "user_middle_name" => 'Moises',
            "user_first_surname" => 'Davila',
            "user_second_surname" => 'Ortiz',
            "user_email" => 'david@gmail.com',
            "user_birthdate" => Carbon::create(1999, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'admin',
            "password" => Hash::make('david123'),
        ]);

        User::create([
            "user_ci" => 123,
            "user_first_name" => 'Rafael',
            "user_middle_name" => null,
            "user_first_surname" => 'Matienzo',
            "user_second_surname" => null,
            "user_email" => 'matienzo@gmail.com',
            "user_birthdate" => Carbon::create(1948, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'elmati',
            "password" => Hash::make('elmati123'),
        ]);





    }
}
