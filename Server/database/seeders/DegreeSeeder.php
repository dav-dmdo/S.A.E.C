<?php

namespace Database\Seeders;

use App\Models\Degree;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DegreeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Degree::create([
            'school_id' => 1,
            'degree_name' => 'Ingeniería Civil',
            'degree_minimun_credits' => 60,
        ]);

        Degree::create([
            'school_id' => 1,
            'degree_name' => 'Ingeniería Mecánica',
            'degree_minimun_credits' => 60,
        ]);

        Degree::create([
            'school_id' => 2,
            'degree_name' => 'Ingeniería de Producción',
            'degree_minimun_credits' => 60,
        ]);

        Degree::create([
            'school_id' => 2,
            'degree_name' => 'Ingeniería Química',
            'degree_minimun_credits' => 60,
        ]);

        Degree::create([
            'school_id' => 4,
            'degree_name' => 'Ingeniería de Sistemas',
            'degree_minimun_credits' => 60,
        ]);

        Degree::create([
            'school_id' => 3,
            'degree_name' => 'Ingeniería Eléctrica',
            'degree_minimun_credits' => 60,
        ]);

    }
}
