<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\order>
 */
class orderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'order_id' => Str::uuid()->toString(), 
            'customer_id' => rand(11111, 99999),
            'updated_at' => now(),
            'total_amount' => rand(1, 10),
            'order_status' => Arr::random(['Ordered', 'Prepping', 'Cooking', 'Checking', 'Ready', 'Completed']),
            'processed_by' => Arr::random(['1233', '2545', '36']),
        ];
    }
}
