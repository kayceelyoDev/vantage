<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserProfileMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
       $user = $request->user();

        // 1. Check if the user is logged in
        if (! $user) {
            return $request->expectsJson()
                ? response()->json(['message' => 'Unauthenticated.'], 401)
                : redirect()->route('login');
        }

        // 2. Check if their role matches
        if ($user->role !== $role) {
            return $request->expectsJson()
                ? response()->json(['message' => 'Forbidden. Invalid role.'], 403)
                : abort(403, 'Unauthorized action.');
        }

        // 3. Role is OK! Now check if they have a profile
        if (! $user->profile) {
            // If testing via API/Postman
            if ($request->expectsJson()) {
                return response()->json([
                    'message' => 'You need to create a profile first.',
                    'action_required' => 'create_profile'
                ], 403);
            }

            // If hitting it via the browser/Inertia or your Feature Test
            return redirect()->route('user-profiles.create');
        }

        // 4. They have the right role AND a profile. Let them through!
        return $next($request);
    }
}
