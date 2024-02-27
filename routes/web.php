<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CustProfileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CustOrderController;
use App\Http\Controllers\CustOrderInfoController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PublicMenuController;
use App\Http\Controllers\PublicHomePageController;

use Illuminate\Foundation\Application;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\custOrder;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Customer 
Route::get('/welcome', [PublicHomePageController::class, 'show'])->name('welcome.menu.show');
  


Route::get('/customer/dashboard', function () {
    $custOrder = custOrder::all();
    return Inertia::render('Customer/CustomerDashboard', [
        'custOrder' => $custOrder
    ]);
})->middleware(['auth:customer', 'verified'])->name('customer.dashboard');



Route::middleware('auth:customer')->group(function () {
    Route::get('/customer/profile', [CustProfileController::class, 'edit'])->name('customer.profile.edit');
    Route::patch('/customer/profile', [CustProfileController::class, 'update'])->name('customer.profile.update');
    Route::delete('/customer/profile', [CustProfileController::class, 'destroy'])->name('customer.profile.destroy');
    
    Route::get('/customer/order', [CustOrderController::class, 'index'])->name('customer.order.index');
    Route::get('/customer/order/{order}', [CustOrderController::class, 'view'])->name('customer.order.view');

    Route::get('/customer/orderInfo', [CustOrderInfoController::class, 'index'])->name('customer.orderData.index');
    Route::post('/customer/orderInfo', [CustOrderInfoController::class, 'store'])->name('customer.orderData.store');
});

// Users (Admin)
Route::get('/users', function () {
    return Inertia::render('Users/UserComponent');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/welcome/Menu', [PublicMenuController::class, 'show'])->name('Menu.show');
    
Route::middleware('auth')->group(function () {
    Route::get('/order', [OrderController::class, 'index'])->name('order.index');
    Route::get('/order/{order}', [OrderController::class, 'edit'])->name('order.edit');
    Route::patch('/order/{order}', [OrderController::class, 'update'])->name('order.update');
    
    Route::get('/Menu', [MenuController::class, 'index'])->name('Menu.index');
    Route::get('/Menu/{Menu}', [MenuController::class, 'edit'])->name('Menu.edit');
    Route::patch('/Menu/{Menu}', [MenuController::class, 'update'])->name('Menu.update');
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
require __DIR__.'/cust_auth.php';
