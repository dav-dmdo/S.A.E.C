<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('terms', function (Blueprint $table) {
            $table->id();
            $table->integer('academic_year_id');
            $table->enum('term_id', [1, 2, 3, 4]);
            $table->date('term_start_date');
            $table->date('term_end_date');
            $table->enum('term_type', ['First Term', 'Second Term', 'Third Term', 'Intensive Term']);

            // Creo que puede haber problemas con el onDelete y onUpdate porque NO puede ser null el id del anio academico
            // pero no quiero que se borre Cascade.

            $table->foreign('academic_year_id')->references('academic_year_id')->on('academic_years');
            $table->unique(['academic_year_id', 'term_id'], 'unique_term_combination');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('terms');
    }
};
