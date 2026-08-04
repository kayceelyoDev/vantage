<?php

namespace Database\Factories;

use App\Models\UserProfile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<UserProfile>
 */
class UserProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'firstname' => $this->faker->firstName(),
            'lastname' => $this->faker->lastName(),
            'business_name' => $this->faker->company(),
            'bio' => $this->faker->paragraph(),
            'address' => $this->faker->address(),
            'slug' => $this->faker->slug(),

        ];
    }
}
