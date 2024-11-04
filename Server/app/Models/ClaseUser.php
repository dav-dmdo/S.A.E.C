<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ClaseUser extends Pivot
{
    protected $table = 'classes_users';

    protected $fillable = [
        'class_id',
        'user_id',
        'attendance_arrival',
        'attendance_departure',
        'attendance_rating'
    ];

    protected $casts = [
        'class_id' => 'int',
        'user_id' => 'int',
        'attendance_arrival' => 'datetime:H:i',
        'attendance_departure' => 'datetime:H:i',
        'attendance_rating' => 'int'
    ];

    public function class()
    {
        return $this->belongsTo(Clase::class, 'class_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_ci');
    }

}
