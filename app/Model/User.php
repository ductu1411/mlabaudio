<?php

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;
    const TOKEN = 'token';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', self::TOKEN, 'user_name', 'expires_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function createToken()
	{
		$str = '0123456789abcdefghijklmnopqrstuvwxyz';
		return str_shuffle($str);
	}

	public function isExpires($expires)
	{
		$date = Carbon::createFromTimeString($expires);
		return $date->isPast();
	}

	public function requestToArray($request)
	{
		$user = [];
		$user['name'] = $request->get('displayName');
		$user['email'] = $request->get('email');
		$user['password'] = Hash::make($request->get('password'));
		$user['user_name'] = $request->get('username');
		$user['token'] = '';
		$user['expires_at'] = Carbon::now();
		return $user;
	}

    public function requestUpdateToArray($request){
    	$user = [];
		$user['name'] = $request->get('name');
		$user['email'] = $request->get('email');
		$user['password'] = Hash::make($request->get('password'));
		return $user;
	}
}
