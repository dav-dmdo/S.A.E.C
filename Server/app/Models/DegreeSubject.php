<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DegreeSubject extends Model
{
    protected $table = 'degrees_subjects';

    protected $fillable = [
        'degree_id',
        'subject_id',
    ];

    public function degree() {
        return $this->belongsTo(Degree::class);
    }

    public function subject() {
        return $this->belongsTo(Subject::class);
    }

    protected function casts()
    {
        return [
            "degree_id" => 'int',
        ];
    }
}
