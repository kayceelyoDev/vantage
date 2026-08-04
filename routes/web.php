<?php

use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified', 'user_profile:creator'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::resource('user-profiles', UserProfileController::class);
});

require __DIR__.'/settings.php';
