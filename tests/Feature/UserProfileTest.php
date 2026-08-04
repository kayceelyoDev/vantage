    <?php

    test('example', function () {
        $response = $this->post('/user-profiles');
        $user = \App\Models\User::factory()->create();

        $response = $this->actingAs($user)->post('/user-profiles', [
            'firstname' => 'John',
            'user_id' => $user->id,
            'lastname' => 'Doe',
            'bio' => 'This is a test bio.',
            'address' => '123 Test Street',
            'business_name' => 'Test Business',
            'slug' => 'test-business',
        ]);
        $response->assertStatus(200);

    });

    test('user profile creation requires authentication', function () {
        $response = $this->post('/user-profiles', [
            'firstname' => 'John',
            'lastname' => 'Doe',
            'bio' => 'This is a test bio.',
            'address' => '123 Test Street',
            'business_name' => 'Test Business',
            'slug' => 'test-business',
        ]);
        $response->assertRedirect('/login');
    });

    test('user profile update requires authentication', function () {
        $user = \App\Models\User::factory()->create();
        $userProfile = \App\Models\UserProfile::factory()->create(['user_id' => $user->id]);

        $response = $this->put("/user-profiles/{$userProfile->id}", [
            'firstname' => 'Jane',
            'lastname' => 'Doe',
            'bio' => 'Updated bio.',
            'address' => '456 Updated Street',
            'business_name' => 'Updated Business',
            'slug' => 'updated-business',
        ]);
        $response->assertRedirect('/login');
    });

    test('user profile delete only its data', function () {
        $user = \App\Models\User::factory()->create();
        $userProfile = \App\Models\UserProfile::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->delete("/user-profiles/{$userProfile->id}");
        $response->assertStatus(200);
    });

    test('fetch profile data', function () {
        $user = \App\Models\User::factory()->create();
        $userProfile = \App\Models\UserProfile::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->get("/user-profiles/{$userProfile->id}");
        $response->assertStatus(200);

    });
