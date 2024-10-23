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
        Schema::create('day_blocks', function (Blueprint $table) {
            $table->id('day_block_id');
            $table->string('day_block_day_1');
            $table->string('day_block_day_2');
            $table->string('day_block_number_of_days');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('day_blocks');
    }
};
