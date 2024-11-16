<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class Controller
{
    abstract public function index();
    abstract public function show($id);
    abstract public function store(Request $request);
    abstract public function update(Request $request, $id);
    abstract public function destroy($id);
}
