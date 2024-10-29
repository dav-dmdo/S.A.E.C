<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Whoops\Exception\Formatter;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('academic_years', function (Blueprint $table) {
            $table->integer("academic_year_id");                    // 2122, 2223, 2324, 2425, ...
            $table->date('academic_year_start_date')->unique();
            $table->date('academic_year_end_date')->unique();
            $table->string('description');

            $table->primary("academic_year_id");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('academic_years');
    }
};
