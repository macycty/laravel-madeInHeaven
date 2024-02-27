<?php

namespace App\Http\Controllers;

use App\Models\custOrder;
use App\Models\order_detail;
use App\Models\menu;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CustOrderController extends Controller
{
    //Customer/CustOrder
    
    public function index(Request $request)
    {
        
        $custOrder = custOrder::orderBy('created_at', 'desc')->get();
        return Inertia::render('Customer/CustOrder/All', [
            'custOrder' => $custOrder,
        ]);
    }

    public function view($order_id, custOrder $custOrder, order_detail $order_detail, menu $menu)
    {
        $custOrder = custOrder::where('order_id', $order_id)->get()[0];
        return Inertia::render('Customer/CustOrder/View', [
            'custOrder' => $custOrder,
        ]);
    }


}
