<?php

namespace App\Http\Controllers;

use App\Models\order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        // return order::all();
        $order = order::all();
        
        return Inertia::render('Order/All', [
            'order' => $order
        ]);
    }

    public function edit(order $order)
    {
        return Inertia::render('Order/Edit', [
            'order' => $order
        ]);
    }

    public function update(order $order,Request $request)
    {
        $order->update([
            'order_status' => $request->order_status,
        ]);
    }
}
