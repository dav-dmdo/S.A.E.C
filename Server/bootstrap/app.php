<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
        then: function () {
            Route::prefix('api/v1/academic-year')
                ->group(base_path('routes/academicYear.php'));
            Route::prefix('api/v1/term')
                ->group(base_path('routes/term.php'));
            Route::prefix('api/v1/test')
                ->group(base_path('routes/test.php'));
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(except: [
            '/api/*',
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        
    })->create();
