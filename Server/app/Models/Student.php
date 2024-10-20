<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $primaryKey = 'user_id';

    protected $fillable = [
        "user_id",
        "student_card_id",
        "student_enrollment_date"
    ];

    protected function casts()
    {
        return [
            'user_id' => 'int',
            'student_card_id' => 'int'
        ];
    }
}
