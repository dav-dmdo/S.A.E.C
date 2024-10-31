<?php

namespace Database\Seeders;

use App\Models\Block;
use App\Models\Classroom;
use DeepCopy\f001\B;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;
use Nette\Utils\Random;

class ClassroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $blocks = Block::all();
        Log::info($blocks);
        $block_A1 = Block::where('block_id', 'A1')->first();
        Log::info($block_A1);

        foreach ($blocks as $block) {
            $block_floors = $block->block_number_of_floors;
            for ($i = 1; $i <= $block_floors; $i++) {
                for ($j = 1; $j <= 10; $j++) {
                    $classroom_id = $i . ($j >= 10 ? '' : '0') . $j;
                    Classroom::create([
                        'block_id' => $block->block_id,
                        'classroom_id' => $classroom_id,
                        'classroom_name' =>  $block->block_id . '-' . $classroom_id,
                        'classroom_max_num_of_students' => Random::generate(2, '0-9')
                    ]);
                    Log::info('Se ha creado el salón ' . $block->block_id . '-' . $classroom_id);
                }
            }
        }
    }
}
