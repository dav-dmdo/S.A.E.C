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
            "user_ci" => 27790027,
            "user_first_name" => 'Juan',
            "user_middle_name" => 'Juan',
            "user_first_surname" => 'Liporaci',
            "user_second_surname" => 'Liporaci',
            "user_email" => 'juan.liporaci@correo.unimet.edu.ve',
            "user_birthdate" => Carbon::create(1999, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'Liporaci',
            "password" => Hash::make('liporaci123'),
        ]);
        User::create([
            "user_ci" => 30085424,
            "user_first_name" => 'Daniel',
            "user_middle_name" => 'Daniel',
            "user_first_surname" => 'De Oliveira',
            "user_second_surname" => 'De Oliveira',
            "user_email" => 'daniel.deoliveira@correo.unimet.edu.ve',
            "user_birthdate" => Carbon::create(1999, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'De Oliveira',
            "password" => Hash::make('deoliveira123'),
        ]);
        User::create([
            "user_ci" => 29887224 ,
            "user_first_name" => 'Jonathan',
            "user_middle_name" => 'Jonathan',
            "user_first_surname" => 'Pizzurro',
            "user_second_surname" => 'Pizzurro',
            "user_email" => 'jonathan.pizzurro@correo.unimet.edu.ve',
            "user_birthdate" => Carbon::create(1999, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'Pizzurro',
            "password" => Hash::make('pizzurro123'),
        ]);
        User::create([
            "user_ci" => 29945196,
            "user_first_name" => 'Pedro',
            "user_middle_name" => 'Pedro',
            "user_first_surname" => 'Gonzalez',
            "user_second_surname" => 'Gonzalez',
            "user_email" => 'gonzalez.pedro@correo.unimet.edu.ve',
            "user_birthdate" => Carbon::create(1999, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'Gonzalez',
            "password" => Hash::make('gonzalez123'),
        ]);

        User::create([
            "user_ci" => 10000000,
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
