<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Term extends Model
{
    use HasFactory;

    protected $fillable = [
        'academic_year_id',
        'term_id',
        'term_start_date',
        'term_end_date',
        'term_type'
    ];

    // Uno a Muchos (Un trimestre tiene muchos años)
    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class, 'academic_year_id', 'academic_year_id');
    }

    // Uno a muchos (Un trimestre tiene varias secciones)
    public function sections() {
        return $this->hasMany(Section::class, 'term_id', 'term_id');
    }

    protected function casts(): array
    {
        return [
            'academic_year_id' => 'int',
            'term_id' => 'int',
            'term_start_date' => 'date:d-m-Y',
            'term_end_date' => 'date:d-m-Y',
            'term_type' => 'string'
        ];
    }
}
