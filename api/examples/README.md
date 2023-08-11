# Laravel
## API
### Captcha

- Put a font in `public/font`
- Make this route in `api.php`
    - ~~~php
        Route::get('/captcha/{n}', function ($n) {
            // sudo apt install php-gd

            if ($n > 7) $n = 7;
            if ($n < 1) $n = 1;

            $W = $n * 30;
            $H = 60;
            $C = "1234567890abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            if (extension_loaded('gd') && function_exists('gd_info')) {
                $img = @imagecreatetruecolor($W, $H) or die('Cannot init GD-image stream');
                imagesavealpha($img, true);

                $color = imagecolorallocatealpha($img, 0, 0, 0, 127);
                imagefill($img, 0, 0, $color);

                $left = 10;
                for ($i = 0; $i < $n; $i++) {
                    $C = str_shuffle($C);
                    $color = imagecolorallocatealpha($img, rand(0, 255), rand(0, 255), rand(0, 255), rand(0, 100));
                    imagettftext($img, rand(20, 30), rand(-45, 45), $left, 40, $color, public_path() . "/font/fnt.ttf", $C[0]);
                    $left += 30;
                }

                imagepng($img);
                $buffer = ob_get_contents();
                ob_end_clean();
                imagedestroy($img);
                return response($buffer, 200)->header('Content-type', 'image/png');
            }
        });
    ~~~
- Call API like this
    - `http://localhost:8000/api/captcha/6`