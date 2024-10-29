<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = [
        "subject_id",
        "section_number",
        "academic_year_id",
        "term_id",
        "teacher_id",
        "day_block_id",
        "time_block_id",
        "block_id",
        "classroom_id",
        "section_description",
        "section_capacity",
    ];

    protected function casts()
    {
        return [
            "subject_id" => "int",
            "section_number" => "int",
            "academic_year_id" => "int",
            "term_id" => "int",
            "teacher_id" => "int",
            "time_block_id" => "int",
            "classroom_id" => "int",
            "section_capacity" => "int",
        ];
    }
}
