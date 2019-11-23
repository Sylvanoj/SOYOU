<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        $orders = Order::all();
    }

    public function addOrder(Request $request){
        $order = new Order;

        $order->name = $request->name;

        $order->province = $request->province;

        $order->city = $request->city;

        $order->shipping_address = $request->shipping_address;

        $order->billing_address = $request->billing_address;

        $order->calf_size = $request->calf_size;

        $order->leg_length = $request->leg_length;

        $order->foot_size = $request->foot_size;

        $order->save();
    }
}
