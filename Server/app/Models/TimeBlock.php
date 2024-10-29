<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeBlock extends Model
{
    protected $fillable = [
        "day_block_id",
        "time_block_id",
        "time_block_start_time",
        "time_block_finish_time"
    ];

    protected $hidden = [];

    // Uno a Muchos (Una hora tiene un [bloque de día])
    public function dayBlock() {
        return $this->belongsTo(DayBlock::class);
    }

    protected function casts(): array
    {
        return [
            "subject_id" => "int"
        ];
    }
}
