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
        Schema::create('classes', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('section_id');
            $table->integer('class_number');

            $table->date('class_date');
            $table->boolean('class_is_canceled');
            $table->enum('class_type', ['Evaluation', 'Class']);
            $table->string('class_topic');

            $table->unique(['section_id', 'class_number'], 'unique_class_combination');
            $table->foreign('section_id')->references('id')->on('sections');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
