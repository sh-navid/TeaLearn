# Laravel
## API
### AUTH - SANCTUM with Abilities
- Ability is like `OAuth's "scopes"`
- To use it; Run `composer create-project laravel/laravel api.test`
- CD `api.test`
- Run `composer require laravel/sanctum`
- Run `php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"`
- Put your database password in `.env`
- Run `php artisan migrate:fresh`
- Change `app/Http/Kernel.php` and uncomment `EnsureFrontendRequestsAreStateful` class
    - ~~~php
        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ],
      ~~~
- Change `use` section of `app/Models/User.php` to:
    - ~~~php
        use HasApiTokens, HasFactory, Notifiable;
      ~~~
- Routes
    - ~~~php
        Route::post('/register', function (Request $request) {
            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
            ]);

            $token = $user->createToken('authToken', ["user:view"])->plainTextToken; // ->accessToken ???
            return response()->json(['access_token' => $token]);
        });

        Route::post('/login', function (Request $request) {
            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json(['message' => 'Invalid login data'], 401);
            }

            $user = User::where('email', $request['email'])->firstOrFail();
            $token = $user->createToken('authToken', ["user:view", "user:edit"])->plainTextToken; // ->accessToken ???
            return response()->json(['access_token' => $token]);
        });

        Route::group(['middleware' => ['auth:sanctum']], function () {
            Route::get('/user', function (Request $request) {
                return $request->user();
            });

            Route::post('/logout', function (Request $request) {
                $request->user()->tokens()->delete();
                return  response()->json(['message' => 'user logged out']);
            });

            // Call this api once after register and then again after login
            Route::post('/info', function (Request $request) {
                $user = $request->user();
                if ($user->tokenCan('user:edit')) {
                    return response()->json(['username' => $user->name, 'data' => 'You are an editor']);
                } else {
                    return response()->json(['username' => $user->name, 'data' => 'You are just a viewer']);
                }
            });
        });
      ~~~