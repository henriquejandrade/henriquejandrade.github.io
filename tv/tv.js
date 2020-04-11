$(document).ready(function () {
    showControls();
    draw();
});

var sprite;
var context;
var blip;
function draw() {
    var canvas = document.getElementById('screen-canvas');
    context = canvas.getContext('2d');

    blip = new Audio('blip.wav');

    sprite = new Image();
    sprite.onload = function () {
        context.drawImage(
            sprite, 0, 0, 256, 192,
            0, 0, 256, 192);
    };

    sprite.src = 'frames.gif';

    setInterval(update, 1000);
}

// Animation
var currentFrame = 0;
function update() {
    context.drawImage(
        sprite, 0, 192 * currentFrame, 256, 192,
        0, 0, 256, 192);

    currentFrame = currentFrame >= 2 ? 0 : currentFrame + 1;

    context.font = '12px Retron2000';
    context.fillStyle  = "#FFFFFF";
    context.fillText('Toque para começar', 10, 50);

    blip.play();
}