# Laravel
## API
### AUTH - SANCTUM
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
- Create a controller `php artisan make:controller AuthController`
    - ~~~php
        class AuthController extends Controller
        {
            public function register(Request $request)
            {
                $user = User::create([
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'password' => Hash::make($request['password']),
                ]);

                $token = $user->createToken('authToken')->plainTextToken;
                return response()->json(['access_token' => $token]);
            }

            public function login(Request $request)
            {
                if (!Auth::attempt($request->only('email', 'password'))) {
                    return response()->json(['message' => 'Invalid login data'], 401);
                }

                $user = User::where('email', $request['email'])->firstOrFail();
                $token = $user->createToken('authToken')->plainTextToken;
                return response()->json(['access_token' => $token]);
            }

            public function logout(Request $request)
            {
                $request->user()->tokens()->delete();
                return [
                    'message' => 'user logged out'
                ];
            }
        }
      ~~~
- Routes
    - ~~~php
        Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
            return $request->user();
        });

        Route::post('/register', [AuthController::class, 'register']);

        Route::post('/login', [AuthController::class, 'login']);

        Route::group(['middleware' => ['auth:sanctum']], function () {
            // protected routes

            // Do something with controller
            Route::post('/logout', [AuthController::class, 'logout']);

            // Do something without controller
            Route::post('/info', function (Request $request) {
                $user = $request->user();
                return response()->json(['username' => $user->name, 'data' => 'this is our protected data for ' . $user->name]);
            });
        });
      ~~~
- Postman
    - Register
        - URL: `localhost:8000/api/register`
        - Authorizathon: `No`
        - Header: `Accept => application/json`
        - Form data body: `name, email, password`
    - Login
        - URL: `localhost:8000/api/login`
        - Authorizathon: `No`
        - Header: `Accept => application/json`
        - Form data body: `email, password`
    - Logout
        - URL: `localhost:8000/api/logout`
        - Authorizathon: `Bearer`
        - Header: `Accept => application/json`
        - Form data body: `No`
    - User
        - URL: `localhost:8000/api/user`
        - Authorizathon: `Bearer`
        - Header: `Accept => application/json`
        - Form data body: `No`
    - Info
        - URL: `localhost:8000/api/info`
        - Authorizathon: `Bearer`
        - Header: `Accept => application/json`
        - Form data body: `No`