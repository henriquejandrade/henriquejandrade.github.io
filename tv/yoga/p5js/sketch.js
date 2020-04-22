let cityImg;
let sun;
let moon;

var building1;
var building2;

var colorMidnight = [10, 0, 83];
var colorMorning = [115, 185, 255];
var colorAfternoon = [77, 122, 255];
var colorNight = [0, 0, 64];
var colorLate = [26, 0, 102];

function setup() {
    let canvas = createCanvas(256, 192);
    canvas.id('bgCanvas');
    canvas.parent('screen');

    cityImg = loadImage('res/bg2.png');

    building1 = new Building(30, 192);
    building2 = new Building(190, 192);

    sun = new Ball(45, new Color(255, 255, 191));
    moon = new Ball(10, new Color(206, 206, 191));
}

function drawBackground() {
    // Draw sky
    var now = new Date();
    var nowSeconds = now.getHours() * 60 * 60 +
        now.getMinutes() * 60 +
        now.getSeconds();

    var borderColorA;
    var borderColorB;

    // What time is it?
    if (nowSeconds < 10800) {
        borderColorA = colorMidnight;
        borderColorB = colorLate;
    } else if (nowSeconds < 32400) {
        borderColorA = colorLate;
        borderColorB = colorMorning;
    } else if (nowSeconds < 54000) {
        borderColorA = colorMorning;
        borderColorB = colorAfternoon;
    } else if (nowSeconds < 75600) {
        borderColorA = colorAfternoon;
        borderColorB = colorNight;
    } else {
        borderColorA = colorNight;
        borderColorB = colorMidnight;
    }

    var dimColor = [myLerp(borderColorA[0], borderColorB[0], nowSeconds / 86400),
    myLerp(borderColorA[1], borderColorB[1], nowSeconds / 86400),
    myLerp(borderColorA[2], borderColorB[2], nowSeconds / 86400)];

    background(dimColor[0], dimColor[1], dimColor[2]);
}

function myLerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

function update() {
    building1.update();
    building2.update();
}

function draw() {
    update();

    var now = new Date();
    var nowSeconds = now.getHours() * 60 * 60 +
        now.getMinutes() * 60 +
        now.getSeconds();

    // Sun and Moon positions
    //var position = myLerp(192 + 45, -24, nowSeconds / 86400);
    // sun.css('bottom', position + '%');
    // moon.css('top', (position - 100) + '%');

    var moonPosition = (nowSeconds < 43200) ?
        myLerp(192 / 2, 3 * 192 / 2, nowSeconds / 43200) :
        myLerp(-192 / 2, 192 / 2, (nowSeconds - 43200) / 43200);

    drawBackground();

    sun.draw(256 / 4, myLerp(192 * 3 / 2, -192 / 2, nowSeconds / 86400));
    moon.draw(3 * 256 / 4, moonPosition);

    //building1.draw();
    //building2.draw();

    image(cityImg, 0, 0);
}