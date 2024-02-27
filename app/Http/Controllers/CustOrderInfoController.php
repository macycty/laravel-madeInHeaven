<?php

namespace App\Http\Controllers;

use App\Models\order_info;
use App\Models\order_detail;
use App\Models\menu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Session;
use DateTime;


class CustOrderInfoController extends Controller
{
    //
    public function index()
    {
        // return order::all();
        $order_info = order_info::all();
        $menu = menu::where('menu_status', 'Available')->get();
        
        return Inertia::render('OrderInfo/All', [
            'order_info' => $order_info,
            'menu' => $menu
        ]);
    }

    public function store(Request $request)
    {
        $order_id = Str::uuid();
        $now = new DateTime();
    
        $order_info = order_info::create ([
            'order_id' => $order_id,
            'customer_id' => $request-> customer_id,
            'created_at' => $now,
            'updated_at' => $now,
            'total_amount' => $request-> total_amount ,
            'order_status' => $request-> order_status ,
            'processed_by' => $request-> processed_by ,
        ]);

        foreach ($request -> orderDetail as $orderDetail) {
            $order_detail = order_detail::create ([
                'order_detail_id' => Str::uuid(),
                'order_id'=> $order_id,
                'menu_id' => $orderDetail['menu_id'],
                'amount' => $orderDetail['amount'],
                'no_of_servings' => $orderDetail['no_of_servings'],
                'updated_at' => $now,
                'created_at' => $now,
            ]);

        }
    
        
        return to_route('customer.order.index');
    }
 

}
