<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    //return inertia('Welcome');
    return Inertia::render('Home', [
        'name' => 'John Doe',
        'frameworks' => ['Laravel', 'Vue', 'Inertia']
    ]);
});
