<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    use AuthenticatesUsers;
    private $hash;
    private $user;

    public function __construct(
    	Hash $hash,
		User $user
	)
	{
		$this->hash = $hash;
		$this->user = $user;
	}

	public function register(Request $request)
	{
		$request->validate([
			'username' => 'required|string',
			'email' => 'required|string|email|unique:users',
			'password' => 'required|string',
			'confirm' => 'required|string'
		]);

		$user = new User([
			'name' => $request->username,
			'email' => $request->email,
			'password' => $this->hash::make($request->password)
		]);

		$user->save();

		return response()->json($this->getToken($request, $user, 'Tạo tài khoản thành công!'), 201);
	}

	public function login(Request $request)
	{
		$request->validate([
			'username'    => 'required|string',
			'password'    => 'required|string',
			'remember_me' => 'boolean'
		]);

		if(!$this->attemptLogin($request)) {
			return response()->json(['message' => 'Đăng nhập bị lỗi']);
		}

		return response()->json($this->getToken($request));
	}

	protected function attemptLogin(Request $request)
	{
		$credentials = $this->credentials($request);
		// 验证用户名登录方式
		$usernameLogin = $this->guard()->attempt([
			'user_name'     => $credentials['username'],
			'password' => $credentials['password']], $request->filled('remember'));
		if ($usernameLogin) {
			return true;
		}
		// 验证手机号登录方式
		$mobileLogin = $this->guard()->attempt([
			'user_name'   => $credentials['username'],
			'password' => $credentials['password']], $request->filled('remember'));
		if ($mobileLogin) {
			return true;
		}

		// 验证邮箱登录方式
		$emailLogin = $this->guard()->attempt([
			'email'    => $credentials['username'],
			'password' => $credentials['password']], $request->filled('remember'));
		if ($emailLogin) {
			return true;
		}

		return false;
	}

	public function username()
	{
		return 'username';
	}

	public function logout(Request $request)
	{
		$request->user()->token()->revoke();

		return response()->json([
			'message' => 'Đăng xuất thành công'
		]);
	}

	public function getToken($request, $message = 'success')
	{
		$username = $request->username;
		$user = $this->user::where('user_name', '=', $username)->first();
		$result = $user->toArray();
		if ($user->isExpires($user->expires_at)) {
			$token = $user->createToken();
			$user->token = $token;
			$user->expires_at = Carbon::now()->addDays(2);
			$user->save();
			$result['token'] = $token;
		}
		$result['message'] = $message;
		return $result;
	}
}
