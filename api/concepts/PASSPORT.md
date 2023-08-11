# Laravel
## API
### PASSPORT
- To use it; Run `composer create-project laravel/laravel api.test`
- CD `api.test`
- Run `composer require laravel/passport`
- Enter database password in `.env`
- Drop old database if exists and recreate it
- Modify `config/app.php`
    - ~~~php
        'providers' => ServiceProvider::defaultProviders()->merge([
            ...
            Laravel\Passport\PassportServiceProvider::class,
            ...
        ])->toArray(),
      ~~~
- Run `php artisan migrate:fresh`
- Run `php artisan passport:keys`
    - Checkout in `/storage`
        - `oauth-private.key`
        - `oauth-public.key`
- Run `php artisan passport:install`
- Modify `config/auth.php`
    - ~~~php
        'guards' => [
            'web' => [
                'driver' => 'session',
                'provider' => 'users',
            ],
            'api' => [
                'driver' => 'passport',
                'provider' => 'users',
            ],
        ],
      ~~~
- Modify User model:
    - ~~~php
        // use Laravel\Sanctum\HasApiTokens;
        use Laravel\Passport\HasApiTokens;
      ~~~
- Modify `app/Providers/AuthServiceProvider.php`
    - ~~~php
        class AuthServiceProvider extends ServiceProvider
        {
            protected $policies = [
                'App\Models\Model' => 'App\Policies\ModelPolicy',
            ];

            public function boot()
            {
                $this->registerPolicies();
            }
        }
      ~~~
- Routes
    - ~~~php
        Route::middleware('auth:api')->get('/user', function (Request $request) {
            return $request->user();
        });

        Route::post('/register', function (Request $request) {
            $data = $request->validate([
                'name' => 'required|max:200|min:4',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed|min:8'
            ]);

            $data['password'] = bcrypt($request->password);
            $user = User::create($data);
            $token = $user->createToken('MyAPIToken')->accessToken;
            return response(['user' => $user, 'token' => $token]);
        });

        Route::post('/login', function (Request $request) {
            $data = $request->validate([
                'email' => 'email|required',
                'password' => 'required'
            ]);
            if (!auth()->attempt($data)) {
                return response(['error_message' => 'Incorrect input data']);
            }
            $token = auth()->user()->createToken('MyAPIToken')->accessToken;
            return response(['user' => auth()->user(), 'token' => $token]);
        });

        Route::middleware('auth:api')->group(function () {
            // Route::resource('tasks', TaskController::class);
        });
      ~~~
