<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        "subject_name",
        "subject_description"
    ];

    protected $hidden = [];

    protected function casts(): array
    {
        return [
            "subject_id" => "int"
        ];
    }
}
