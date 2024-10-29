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

    public function academic_years()
    {
        return $this->belongsTo(AcademicYear::class);
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
