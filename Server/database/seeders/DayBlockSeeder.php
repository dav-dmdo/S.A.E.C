<?php

namespace Database\Seeders;

use App\Models\DayBlock;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DayBlockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dayBlock1 = new DayBlock();
        $dayBlock1->day_block_id = 'LUN-MIE';
        $dayBlock1->day_block_day_1 = 'LUN';
        $dayBlock1->day_block_day_2 = 'MIE';
        $dayBlock1->day_block_number_of_days = 2;
        $dayBlock1->save();

        $dayBlock2 = new DayBlock();
        $dayBlock2->day_block_id = 'MAR-JUE';
        $dayBlock2->day_block_day_1 = 'MAR';
        $dayBlock2->day_block_day_2 = 'JUE';
        $dayBlock2->day_block_number_of_days = 2;
        $dayBlock2->save();

        $dayBlock3 = new DayBlock();
        $dayBlock3->day_block_id = 'MIE-VIE';
        $dayBlock3->day_block_day_1 = 'MIE';
        $dayBlock3->day_block_day_2 = 'VIE';
        $dayBlock3->day_block_number_of_days = 2;
        $dayBlock3->save();

        $dayBlock4 = new DayBlock();
        $dayBlock4->day_block_id = 'LUN';
        $dayBlock4->day_block_day_1 = 'LUN';
        $dayBlock4->day_block_day_2 = null;
        $dayBlock4->day_block_number_of_days = 1;
        $dayBlock4->save();

        $dayBlock5 = new DayBlock();
        $dayBlock5->day_block_id = 'MAR';
        $dayBlock5->day_block_day_1 = 'MAR';
        $dayBlock5->day_block_day_2 = null;
        $dayBlock5->day_block_number_of_days = 1;
        $dayBlock5->save();

        $dayBlock6 = new DayBlock();
        $dayBlock6->day_block_id = 'MIE';
        $dayBlock6->day_block_day_1 = 'MIE';
        $dayBlock6->day_block_day_2 = null;
        $dayBlock6->day_block_number_of_days = 1;
        $dayBlock6->save();

        $dayBlock7 = new DayBlock();
        $dayBlock7->day_block_id = 'JUE';
        $dayBlock7->day_block_day_1 = 'JUE';
        $dayBlock7->day_block_day_2 = null;
        $dayBlock7->day_block_number_of_days = 1;
        $dayBlock7->save();

        $dayBlock8 = new DayBlock();
        $dayBlock8->day_block_id = 'VIE';
        $dayBlock8->day_block_day_1 = 'VIE';
        $dayBlock8->day_block_day_2 = null;
        $dayBlock8->day_block_number_of_days = 1;
        $dayBlock8->save();
    }
}
