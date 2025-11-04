<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:191',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages(),
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'status' => 401,
                'message' => 'Utilisateur invalide',
            ], 401);
        }

        if (! Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 401,
                'message' => 'Mot de passe incorrect',
            ], 401);
        }

        $token = $user->createToken($user->email . '_Token')->plainTextToken;

        return response()->json([
            'status' => 200,
            'username' => $user->name,
            'role' => $user->role ?? null,
            'token' => $token,
            'prenom' => $user->prenom ?? null,
            'telephone' => $user->telephone ?? null,
            'message' => 'Utilisateur valide',
        ], 200);
    }
}
