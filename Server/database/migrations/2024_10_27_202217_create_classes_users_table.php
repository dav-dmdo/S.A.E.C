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
        Schema::create('classes_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('class_id');
            $table->integer('user_id');
            $table->time('attendance_arrival');
            $table->time('attendance_departure');
            $table->enum('attendance_rating', [-2, -1, 0, 1, 2]);

            $table->unique(['class_id', 'user_id'], 'unique_attendance_combination');
            $table->foreign('class_id')->references('id')->on('clases');
            $table->foreign('user_id')->references('user_ci')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes_users');
    }
};
