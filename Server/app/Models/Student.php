<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_ci",
        "student_card_id",
        "student_enrollment_date"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected function casts()
    {
        return [
            'user_ci' => 'int',
            'student_card_id' => 'int'
        ];
    }
}
