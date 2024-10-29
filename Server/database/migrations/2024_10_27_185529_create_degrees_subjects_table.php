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
        Schema::create('degrees_subjects', function (Blueprint $table) {
            $table->id();
            $table->string('degree_id');
            $table->string('subject_id');

            $table->foreign('degree_id')->references('degree_id')->on('degrees');
            $table->foreign('subject_id')->references('subject_id')->on('subjects');

            $table->unique(['degree_id', 'subject_id'], 'unique_degree_subject_combination');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('degrees_subjects');
    }
};
