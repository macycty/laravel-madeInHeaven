<?php

namespace App\Http\Controllers\CustAuth;

use App\Http\Controllers\Controller;
use App\Models\customer;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Customer/Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'customer_first_name' => 'required|string|max:255',
            'customer_last_name' => 'required|string|max:255',
            'customer_email' => 'required|string|lowercase|email|max:255|unique:'.customer::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = customer::create([
            'customer_first_name' => $request->customer_first_name,
            'customer_middle_name' => $request->customer_middle_name,
            'customer_last_name' => $request->customer_last_name,
            'customer_email' => $request->customer_email,
            'password' => Hash::make($request->password),
            'customer_username' => $request->customer_first_name,
            'account_status' => $request->account_status,
        ]);

        event(new Registered($user));

        // Auth::login($user);
        // return redirect(RouteServiceProvider::CUSTOMER_DASHBOARD);
        return redirect(route('customer.login'));


    }
}
