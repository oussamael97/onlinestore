<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginn(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:191',
            'password' => 'required',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
    
            if (!$user) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Utilisateur invalide',
                ]);
            } else {
                if (Hash::check($request->password, $user->password)) {
                    // Utilisateur trouvé et mot de passe correct
                    $token = $user->createToken($user->email . '_Token')->plainTextToken;
    
                    // Déterminer le rôle de l'utilisateur
                    $role = $user->role;
                    $prenom=$user->prenom;
                    $telephone=$user->telephone;
                    return response()->json([
                        'status' => 200,
                        'username' => $user->name,
                        'role' => $role,
                        'token' => $token,
                        'prenom'=>$prenom,
                        'telephone'=>$telephone,
                        'message' => 'Utilisateur valide',
                    ]);
                } else {
                    // Mot de passe incorrect
                    return response()->json([
                        'status' => 401,
                        'message' => 'Mot de passe incorrect',
                    ]);
                }
            }
        }
    }
   


}
