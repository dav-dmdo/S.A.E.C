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
        // ******************************
        // USUARIOS TIPO ESTUDIANTE
        // ******************************
        User::create([
            "user_ci" => 27302014,
            "user_first_name" => 'David',
            "user_middle_name" => 'Moises',
            "user_first_surname" => 'Davila',
            "user_second_surname" => 'Ortiz',
            "user_email" => 'david@correo.unimet.edu.ve',
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

        // ******************************
        // USUARIOS TIPO PROFESOR
        // ******************************
        User::create([
            "user_ci" => 14567890,
            "user_first_name" => 'Adolfo',
            "user_middle_name" => null,
            "user_first_surname" => 'Leonard',
            "user_second_surname" => null,
            "user_email" => 'adolfo.leonard@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1950, 2, 15)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'adolfoleonard',
            "password" => Hash::make('adolfo123'),
        ]);
        
        User::create([
            "user_ci" => 17894523,
            "user_first_name" => 'Alberto',
            "user_middle_name" => 'E.',
            "user_first_surname" => 'Paz',
            "user_second_surname" => 'Gomez',
            "user_email" => 'alberto.paz@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1960, 3, 22)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'albertopaz',
            "password" => Hash::make('alberto123'),
        ]);
        
        User::create([
            "user_ci" => 15678934,
            "user_first_name" => 'Aidaelena',
            "user_middle_name" => null,
            "user_first_surname" => 'Smith',
            "user_second_surname" => null,
            "user_email" => 'aidaelena.smith@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1955, 5, 10)->format('d-m-y'),
            "user_gender" => 'Female',
            "username" => 'aidasmith',
            "password" => Hash::make('aida123'),
        ]);
        
        User::create([
            "user_ci" => 12345678,
            "user_first_name" => 'Alicia',
            "user_middle_name" => null,
            "user_first_surname" => 'Harrar',
            "user_second_surname" => 'Israel',
            "user_email" => 'alicia.harrar@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1970, 7, 14)->format('d-m-y'),
            "user_gender" => 'Female',
            "username" => 'aliciaharrar',
            "password" => Hash::make('alicia123'),
        ]);
        
        User::create([
            "user_ci" => 16543210,
            "user_first_name" => 'Christian',
            "user_middle_name" => null,
            "user_first_surname" => 'Guillén',
            "user_second_surname" => null,
            "user_email" => 'christian.guillen@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1980, 1, 25)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'chriguillen',
            "password" => Hash::make('chri123'),
        ]);
        
        User::create([
            "user_ci" => 14567832,
            "user_first_name" => 'Julio',
            "user_middle_name" => null,
            "user_first_surname" => 'Walter',
            "user_second_surname" => null,
            "user_email" => 'julio.walter@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1958, 4, 18)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'juliowalter',
            "password" => Hash::make('julio123'),
        ]);
        
        User::create([
            "user_ci" => 19876543,
            "user_first_name" => 'María',
            "user_middle_name" => 'del Pilar',
            "user_first_surname" => 'Cuenca',
            "user_second_surname" => null,
            "user_email" => 'maria.cuenca@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1972, 6, 5)->format('d-m-y'),
            "user_gender" => 'Female',
            "username" => 'mariacuenca',
            "password" => Hash::make('maria123'),
        ]);
        
        User::create([
            "user_ci" => 10000000,
            "user_first_name" => 'Rafael',
            "user_middle_name" => null,
            "user_first_surname" => 'Matienzo',
            "user_second_surname" => null,
            "user_email" => 'matienzo@unimet.edu.ve',
            "user_birthdate" => Carbon::create(1948, 11, 17)->format('d-m-y'),
            "user_gender" => 'Male',
            "username" => 'elmati',
            "password" => Hash::make('elmati123'),
        ]);
    }
}
