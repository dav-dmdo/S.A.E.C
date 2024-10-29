<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $fillable = [
        "block_id",
        "block_name",
        "block_description",
        "block_number_of_floors"
    ];

    protected $hidden = [];

    // Uno a Muchos (Una bloque [A1] tiene muchos salones)
    public function classrooms() {
        return $this->hasMany(Classroom::class);
    }

    protected function casts(): array
    {
        return [
            "block_id" => "int",
            "block_number_of_floors" => "int"
        ];
    }
}
