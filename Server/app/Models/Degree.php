<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{
    protected $fillable = [
        "school_id",
        "degree_name",
        "degree_minimun_credits"
    ];

    protected function casts()
    {
        return [
            "degree_id" => 'int',
            "school_id" => 'int',
            "degree_minimun_credits" => 'int',
        ];
    }
}
