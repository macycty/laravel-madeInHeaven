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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('customer_first_name', 30);
            $table->string('customer_middle_name', 30)->nullable();
            $table->string('customer_last_name', 30);
            $table->string('customer_email', 50);
            $table->string('customer_phone_number', 30)->nullable();
            $table->binary('profile_image')->nullable();
            $table->string('customer_username', 30);
            $table->string('password');
            $table->string('account_status', 30);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
