<?php

$img = imagecreatetruecolor(200, 200);

$color = imagecolorallocate($img, 100, 100, 100);

imageantialias($img, true);

imagesetthickness($img, 5);

imageline($img, 0, 0, 200, 200, $color);

imagepng($img, __DIR__ . "/test-image.png");

imagedestroy($img);
