<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    protected $primaryKey = 'user_id';

    protected $fillable = [
        "user_ci",
        "teacher_card_id"
    ];

    protected function casts()
    {
        return [
            'user_ci' => 'int',
            'teacher_card_id' => 'int'
        ];
    }
}