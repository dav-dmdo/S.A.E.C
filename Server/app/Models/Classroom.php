<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    protected $fillable = [
        "block_id",
        "classroom_id",
        "classroom_name",
        "classroom_description",
        "classroom_max_num_of_students"
    ];

    // Uno a Muchos (Un salón tiene "está" una bloque [A1])
    public function block() {
        return $this->belongsTo(Block::class);
    }

    protected function casts()
    {
        return [
            "block_id" => 'int',
            "classroom_id" => 'int',
            "classroom_max_num_of_students" => 'int'
        ];
    }
}
