<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('users')->group(function() {
    Route::post('login', 'Auth\UserController@login');
    Route::get('/', 'API\ManagerUserController@listUser')->middleware('token');
    Route::post('register', 'API\ManagerUserController@register')->middleware('token');
    Route::post('update/{id}', 'API\ManagerUserController@update')->middleware('token');
    Route::get('delete/{id}', 'API\ManagerUserController@delete')->middleware('token');
    Route::get('info/{id}', 'API\ManagerUserController@user')->middleware('token');
});
