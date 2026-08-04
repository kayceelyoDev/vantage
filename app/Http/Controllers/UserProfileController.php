<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserProfileRequest;
use App\Models\UserProfile;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return true;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserProfileRequest $request)
    {
        //
        $userProfile = UserProfile::create($request->validated());

    }

    /**
     * Display the specified resource.
     */
    public function show(UserProfile $userProfile)
    {
        //
        $userProfile->load('user');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserProfileRequest $request, UserProfile $userProfile)
    {
        //
        $userProfile->update($request->validated());

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserProfile $userProfile)
    {
        //
        $userProfile->delete();
    }
}
