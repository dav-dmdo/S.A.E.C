<?php

namespace Database\Seeders;

use App\Models\Block;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $block = new Block();
        $block->block_id = 'A1';
        $block->block_name = 'Modulo de Aulas A1';
        $block->block_number_of_floors = 3;

        $block->save();

        Block::create([
            'block_id' => 'A2',
            'block_name' => 'Modulo de Aulas A2',
            'block_number_of_floors' => 3
        ]);

        Block::create([
            'block_id' => 'A3',
            'block_name' => 'Modulo de Aulas A3',
            'block_number_of_floors' => 3
        ]);

        Block::create([
            'block_id' => 'EMG',
            'block_name' => 'Edificio Eugenio Mendoza Goiticoa',
            'block_number_of_floors' => 6
        ]);
    }
}
