<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DegreeSubjects extends Model
{
    protected $fillable = [
        "degree_id",
        "subject_id"
    ];

    protected $hidden = [];

    protected function casts(): array
    {
        return [
            "" => "",
        ];
    }
}
