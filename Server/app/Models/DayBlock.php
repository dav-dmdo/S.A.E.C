<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DayBlock extends Model
{
    protected $fillable = [
        "day_block_day_1",
        "day_block_day_2",
        "day_block_number_of_days"
    ];

    // Uno a Muchos (Una [bloque de días] tiene muchas horas)
    public function timeBlocks() {
        return $this->hasMany(TimeBlock::class);
    }

    protected function casts()
    {
        return [
            "day_block_id" => 'int',
            "day_block_number_of_days" => 'int'
        ];
    }
}
