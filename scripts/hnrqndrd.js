$(document).ready(function () {
    setBg();
    setInterval(setBg(), 60 * 1000); // 60 * 1000 milsec
});

/* animation */

function flip() {
    $('.card-inner').toggleClass('card-flip');
}

/* background */

function setBg() {
    var time = new Date();
    var hours = time.getHours() * 60 * 60;
    var minutes = time.getMinutes() * 60;
    var seconds = time.getSeconds() + minutes + hours;

    var currBgColor;
    var colorA = [29, 3, 105];
    var colorB = [215, 162, 0];
    var colorC = [0, 140, 70];
    var colorD = [0, 78, 155];

    var rate = seconds / (23 * 60 * 60 + 59 * 60 + 60);

    if (rate < 0.25) currBgColor = lerpColor(colorA, colorB, rate / 0.25);
    else if (rate < 0.5) currBgColor = lerpColor(colorB, colorC, (rate - 0.25) / 0.25);
    else if (rate < 0.75) currBgColor = lerpColor(colorC, colorD, (rate - 0.5) / 0.25);
    else if (rate < 1) currBgColor = lerpColor(colorD, colorA, (rate - 0.75) / 0.25);

    var colorHex = rgbToHex(currBgColor[0], currBgColor[1], currBgColor[2]);

    let root = document.documentElement;
    root.style.setProperty('--accent', colorHex);
    root.style.setProperty('--accent-light', colorHex + "11");

    $('body').css('background-color',
        colorHex + "22");
}

/* utils */

function componentToHex(c) {
    var integer = parseInt(c);
    var hex = integer.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function lerpColor(a, b, t) {
    return [(1 - t) * a[0] + t * b[0],
    (1 - t) * a[1] + t * b[1],
    (1 - t) * a[2] + t * b[2]];
}

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
}