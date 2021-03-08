<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Http\Request;

class ManagerUserController extends Controller
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function listUser(Request $request)
    {
        $limit = $request->get('limit');
        $users = $this->user::paginate($limit);
        return response()->json($users->withPath('api/users'));
    }

    public function user($id)
    {
        $user = $this->user::where('id', $id)->first();
        return response()->json($user);
    }

    public function register(Request $request)
    {
        try {
            $userArr = $this->user->requestToArray($request);
            $this->user::create($userArr);
            return response()->json(['message' => 'success']);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $userArr = $this->user->requestUpdateToArray($request);
            $this->user::where('id', $id)->update($userArr);
            return response()->json(['message' => 'success']);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete($id)
    {
        try {
            $this->user::where('id', $id)->delete();
            return response()->json(['message' => 'success']);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
