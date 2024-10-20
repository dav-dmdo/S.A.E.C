<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{

    use HasFactory;

    protected $table = 'Academic_Year';

    protected $primaryKey = 'academic_year_id';

    protected $incrementing = false;

    protected $dateFormat = 'date:dd-MM-YYYY';

    protected $fillable = [
        'academic_year_id',
        'academic_year_start_date',
        'academic_year_end_date',
        'academic_year_description'
    ];

    protected function casts()
    {
        return [
            'academic_year_id' => 'int',
            'academic_year_start_date' => 'date:dd-MM-YYYY',
            'academic_year_end_date' => 'date:dd-MM-YYYY',
            'academic_year_description' => 'string'
        ];
    }
}
