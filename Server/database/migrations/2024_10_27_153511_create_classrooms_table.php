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
        Schema::create('classrooms', function (Blueprint $table) {
            $table->id();
            $table->string('block_id');
            $table->integer('classroom_id');
            $table->string('classroom_name')->unique()->nullable();
            $table->string('classroom_description')->nullable();
            $table->integer('classroom_max_num_of_students');

            $table->foreign('block_id')->references('block_id')->on('blocks');
            $table->unique(['block_id', 'classroom_id'], 'unique_classroom_combination');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classrooms');
    }
};
