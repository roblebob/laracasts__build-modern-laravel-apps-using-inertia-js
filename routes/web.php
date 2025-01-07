<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    //return inertia('Welcome');
    return Inertia::render('Home');
});

Route::get('/users', function () {
    return Inertia::render('Users', [
        'time' => now()->toTimeString()
    ]);
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    dd('logging the user out:  ' . request('foo'));
});
