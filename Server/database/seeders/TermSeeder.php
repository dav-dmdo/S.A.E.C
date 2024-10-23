<?php

namespace Database\Seeders;

use App\Models\Term;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $term1 = new Term();
        $term1->academic_year_id = 2122;
        $term1->term_id = 1;
        $term1->term_name = 'First Term';
        $term1->term_start_date = '2021-09-01';
        $term1->term_end_date = '2021-12-22';
        $term1->term_type = 'First Term';
        $term1->save();

        $term2 = new Term();
        $term2->academic_year_id = 2122;
        $term2->term_id = 2;
        $term2->term_name = 'Second Term';
        $term2->term_start_date = '2022-01-10';
        $term2->term_end_date = '2022-03-31';
        $term2->term_type = 'Second Term';
        $term2->save();

        $term3 = new Term();
        $term3->academic_year_id = 2122;
        $term3->term_id = 3;
        $term3->term_name = 'Third Term';
        $term3->term_start_date = '2022-04-10';
        $term3->term_end_date = '2022-06-30';
        $term3->term_type = 'Third Term';
        $term3->save();

        $term1 = new Term();
        $term1->academic_year_id = 2223;
        $term1->term_id = 1;
        $term1->term_name = 'First Term';
        $term1->term_start_date = '2022-09-01';
        $term1->term_end_date = '2022-12-22';
        $term1->term_type = 'First Term';
        $term1->save();

        $term2 = new Term();
        $term2->academic_year_id = 2223;
        $term2->term_id = 2;
        $term2->term_name = 'Second Term';
        $term2->term_start_date = '2023-01-10';
        $term2->term_end_date = '2023-03-31';
        $term2->term_type = 'Second Term';
        $term2->save();

        $term3 = new Term();
        $term3->academic_year_id = 2223;
        $term3->term_id = 3;
        $term3->term_name = 'Third Term';
        $term3->term_start_date = '2023-04-10';
        $term3->term_end_date = '2023-06-30';
        $term3->term_type = 'Third Term';
        $term3->save();
        $term1 = new Term();
        $term1->academic_year_id = 2324;
        $term1->term_id = 1;
        $term1->term_name = 'First Term';
        $term1->term_start_date = '2023-09-01';
        $term1->term_end_date = '2023-12-22';
        $term1->term_type = 'First Term';
        $term1->save();

        $term2 = new Term();
        $term2->academic_year_id = 2324;
        $term2->term_id = 2;
        $term2->term_name = 'Second Term';
        $term2->term_start_date = '2024-01-10';
        $term2->term_end_date = '2024-03-31';
        $term2->term_type = 'Second Term';
        $term2->save();

        $term3 = new Term();
        $term3->academic_year_id = 2324;
        $term3->term_id = 3;
        $term3->term_name = 'Third Term';
        $term3->term_start_date = '2024-04-10';
        $term3->term_end_date = '2024-06-30';
        $term3->term_type = 'Third Term';
        $term3->save();
    }
}
