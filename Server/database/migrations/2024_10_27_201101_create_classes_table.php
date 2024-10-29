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
            $table->integer('clase_number');
            $table->date('clase_date');
            $table->boolean('clase_is_canceled');
            $table->enum('clase_type', ['Evaluation', 'Class']);
            $table->string('clase_topic');

            $table->unique(['section_id','clase_number'],'unique_clase_combination');

            $table->foreign('section_id')->references('id')->on('sections');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clases');
    }
};
