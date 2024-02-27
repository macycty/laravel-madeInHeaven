<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\menu;
use Inertia\Inertia;

class PublicMenuController extends Controller
{
    //

    public function show()
    {
        $menu = menu::all();
        // $menu = menu::find($menuId);

        return Inertia::render('Customer/HomePage', [
            'menu' => $menu
        ]);

    }
}
