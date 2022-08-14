<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                'error' => null,
            ]);
        }
        return response()->json([
            'error' => 'The provided credentials do not match our records.'
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json([
            'error' => null,
        ]);
    }

    public function getLoginUser(Request $request)
    {
        return response()->json([
            'error' => null,
            'data' => $request->user()
        ]);
    }
}
