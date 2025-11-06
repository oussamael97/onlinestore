<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Login route
Route::post('/login', [AuthController::class, 'login']);

// Authenticated user info (requires Sanctum token)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json($request->user());
});

// Test route
Route::get('/ping', function () {
    return response()->json(['pong' => true]);
});
