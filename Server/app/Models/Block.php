<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $fillable = [
        "block_name",
        "block_number_of_floors"
    ];

    protected $hidden = [];

    protected function casts(): array
    {
        return [
            "block_id" => "int",
            "block_number_of_floors" => "int"
        ];
    }
}
