<?php

namespace App\Http\Controllers;

use App\Models\ClaseUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

// Attendance -> Clase - User -> Confirma asistencia
class ClaseUserController extends Controller
{
    public function index()
    {
        return ClaseUser::all();
    }

    public function show($id)
    {
        $user = User::where("user_ci", $id)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $attendance = ClaseUser::where("user_id", $user->user_ci)->get();

        if (count($attendance) === 0) {
            return response()->json([
                'info' => 'This user not have attendances'
            ], 200);
        }

        return $attendance;
    }

    public function store(Request $request)
    {
        // Key único en el Header
        $allHeaders = getallheaders();

        if (isset($allHeaders['attendance-key'])) {
            $key = "b6VkxjJvV09Xo0DFXlJtspCEWFr8kz2TQeA9FxFXBVw9HtrsbpTVHkR5z1EiDO8e";

            if (str_contains($allHeaders['attendance-key'], $key)) {
                try {
                    $attendance = ClaseUser::firstOrCreate($request->all());
                    $attendance->save();
                    return $attendance;
                } catch (\Throwable $th) {
                    return response()->json(['error' => $th->getMessage()], 400);
                }
            } else {
                return response()->json([
                    'error' => 'Key value is incorrect'
                ], 401);
            }
        } else {
            return response()->json([
                'error' => 'Header key not found'
            ], 401);
        }
    }

    // ********** Protegida: SÓLO EL MISMO USUARIO **********
    public function update(Request $request, $id)
    {
        try {
            /** @var \App\Models\User $user */
            $user = Auth::user();;

            if (!$user || $user->user_ci != $id) {
                return response()->json(['error' => "Usuario no autorizado para actualizar otro usuario"], 401);
            }

            $validated = $request->validate([
                "id" => ["integer"],
                "attendance_comment" => ["string", 'max:255'],
                "attendance_rating" => ["numeric", "between:1,5"]
            ]);

            $attendance = ClaseUser::find($validated["id"]);

            if (!$attendance) {
                return response()->json(['error' => "Error en el ID de la clase, no se encuentra"], 400);
            }

            $attendance->update($validated);

            return $attendance;
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function destroy($user_ci)
    {
        return "Not avaliable";
    }
}
