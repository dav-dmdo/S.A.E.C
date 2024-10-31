<?php

namespace Database\Seeders;

use App\Models\DayBlock;
use App\Models\TimeBlock;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Ramsey\Uuid\Type\Time;
use Illuminate\Support\Carbon;

class TimeBlockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        $dayBlocks = DayBlock::all();

        foreach ($dayBlocks as $dayBlock) {
            $startOfDay = Carbon::parse('07:00:00');
            $endOfDay = Carbon::parse('19:00:00');
            $blockId = 1;

            while ($startOfDay->lessThan($endOfDay)) {
                $startOfBlock = $startOfDay->format('H:i:s');
                $endOfBlock = $startOfDay->copy()->addMinutes(90)->format('H:i:s');

                TimeBlock::create([
                    'day_block_id' => $dayBlock->day_block_id,
                    'time_block_id' => $blockId,
                    'time_block_start_time' => $startOfBlock,
                    'time_block_finish_time' => $endOfBlock,
                ]);

                $startOfDay->addMinutes(105);
                $blockId++;
            }
        }
    }
}
