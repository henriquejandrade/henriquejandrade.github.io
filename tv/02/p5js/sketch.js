let ball;

function setup() {
    let canvas = createCanvas(256, 192);
    canvas.id('bgCanvas');
    canvas.parent('content');
    // canvas.width(256);
    // canvas.height(192);

    ball = new Ball(0, 0, 45);
}

function draw() {
    // noSmooth();
    // background(255);

    // ball.draw();
}