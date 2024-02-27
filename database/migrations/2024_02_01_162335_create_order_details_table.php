<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->uuid('order_detail_id')->unique();
            $table->uuid('order_id')->unsigned();
            $table->integer('menu_id')->unsigned();
            $table->float('amount');
            $table->integer('no_of_servings')->unsigned();
        });

        // Schema::table('order_details', function(Blueprint $table)
        // {
        //     $table->foreign('order_id')
        //         ->references('order_id')->on('orders')
        //         ->onDelete('cascade');

        //     $table->foreign('menu_id')
        //         ->references('menu_id')->on('menu')
        //         ->onDelete('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
