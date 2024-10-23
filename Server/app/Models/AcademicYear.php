<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{

    use HasFactory;

    protected $dateFormat = 'date:d-m-Y';

    protected $fillable = [
        'academic_year_id',
        'academic_year_start_date',
        'academic_year_end_date',
        'academic_year_description'
    ];

    public function terms()
    {
        return $this->hasMany(Term::class);
    }

    protected function casts()
    {
        return [
            'academic_year_id' => 'int',
            'academic_year_start_date' => 'date:d-m-Y',
            'academic_year_end_date' => 'date:d-m-Y',
            'academic_year_description' => 'string'
        ];
    }
}