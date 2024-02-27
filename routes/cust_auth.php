<?php

use App\Http\Controllers\CustAuth\AuthenticatedSessionController;
use App\Http\Controllers\CustAuth\ConfirmablePasswordController;
use App\Http\Controllers\CustAuth\EmailVerificationNotificationController;
use App\Http\Controllers\CustAuth\EmailVerificationPromptController;
use App\Http\Controllers\CustAuth\NewPasswordController;
use App\Http\Controllers\CustAuth\PasswordController;
use App\Http\Controllers\CustAuth\PasswordResetLinkController;
use App\Http\Controllers\CustAuth\RegisteredUserController;
use App\Http\Controllers\CustAuth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest:customer')->group(function () {
    Route::get('customer/register', [RegisteredUserController::class, 'create'])
                ->name('customer.register');

    Route::post('customer/register', [RegisteredUserController::class, 'store']);

    Route::get('customer/login', [AuthenticatedSessionController::class, 'create'])
                ->name('customer.login');

    Route::post('customer/login', [AuthenticatedSessionController::class, 'store']);

    Route::get('customer/forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('customer.password.request');

    Route::post('customer/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('customer.password.email');

    Route::get('customer/reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('customer.password.reset');

    Route::post('customer/reset-password', [NewPasswordController::class, 'store'])
                ->name('customer.password.store');
});

Route::middleware('auth:customer')->group(function () {
    Route::get('customer/verify-email', EmailVerificationPromptController::class)
                ->name('customer.verification.notice');

    Route::get('customer/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('customer.verification.verify');

    Route::post('customer/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('customer.verification.send');

    Route::get('customer/confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('customer.password.confirm');

    Route::post('customer/confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('customer/password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('customer/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('customer.logout');
});
