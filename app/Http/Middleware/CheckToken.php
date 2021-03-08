<?php

namespace App\Http\Middleware;

use App\Model\User;
use Closure;

class CheckToken
{
	private $user;

	public function __construct(User $user)
	{
		$this->user = $user;
	}

	/**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = $this->user::where($this->user::TOKEN, '=', $request->get('token'))->first();
		if ($user) {
			if($user->isExpires($user->expires_at)) {
				return response()->json(['message' => 'token invalid']);
			}
			return $next($request);
		}

		return response()->json(['message' => 'token invalid']);
    }
}
