<?php

namespace App\Http\Controllers;

use App\Models\menu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DateTime;

class MenuController extends Controller
{
    public function index()
    {
        // return menu::all();
        $menu = menu::all();
        
        return Inertia::render('Menu/All', [
            'menu' => $menu
        ]);
    }

    // public function store(Request $request): RedirectResponse
    // {
    //     return Inertia::render('Menu/Edit', [
    //         'menu' => $menu
    //     ]);
            // 'menu_id' => $request->menu_id,
            // 'menu_name' => $request->menu_name,
            // 'price' => $request->price,
            // 'menu_type_id' => $request->menu_type_id,
            // 'menu_image' => $request->menu_image,
            // 'ingredients' => $request->ingredients,
            // 'menu_status' => $request->menu_status,
            // 'updated_at' => $request->updated_at,


    // }

    public function edit($menuId)
    {   
        // return menu::all();
        $menu = menu::find($menuId);

        return Inertia::render('Menu/Edit', [
            'menu' => $menu
        ]);
    }

    public function update($menuId,Request $request)
    {   
        $now = new DateTime();
        $menu = menu::find($menuId);

        $menu->update([
            'menu_id' => $request->menu_id,
            'menu_name' => $request->menu_name,
            'price' => $request->price,
            'menu_type_id' => $request->menu_type_id,
            'menu_image' => $request->menu_image,
            'ingredients' => $request->ingredients,
            'menu_status' => $request->menu_status,
            'updated_at' => $now,

        ]);
    }
    
}
