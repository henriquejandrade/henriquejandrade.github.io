var clock;
var buttonPause;
var buttonStop;
var buttonStart;

var timer;
var totalTime = 60;
var timeCount = 0;

var isRunning = false;
var isInterval = false;

var blip;

$(document).ready(function () {
    timeCount = 0;

    clock = $('#clock');

    $('.button#pause').hide();
    $('.button#stop').hide();
    $('.button#start').show();

    $('#div-clock').hide();

    initBgAnimation();

    blip = new Audio('blip.wav');
});

function tick() {
    // Checks if time is over
    if (!isInterval) {
        if (timeCount >= totalTime) {
            isInterval = true;

            timeCount = 0;
            totalTime = 60 * parseInt($('#interval-time').val());

            $('#clock').toggleClass('interval');

            // Animate interval show title
            showIntervalTitle();

            // Animate background new box
            // drawBox();

            // Play sound feedback
            blip.play();
        }
    } else {
        if (timeCount >= totalTime) {
            isInterval = false;

            timeCount = 0;
            totalTime = 60 * parseInt($('#block-time').val());

            $('#clock').toggleClass('interval');

            // Animate interval hide title
            hideIntervalTitle();

            // Play sound feedback
            blip.addEventListener('ended', function playEnded() {
                blip.removeEventListener('ended', playEnded, false);
                blip.play();
            });

            blip.play();
        }
    }

    setClock(timeCount + 1);
    timeCount++;
}

function setClock(time) {
    var timeString = new Date(time * 1000).toISOString().substr(14, 5);
    clock.text(timeString);
}

function start() {
    if (!isRunning) {
        totalTime = 60 * parseInt($('#block-time').val());
        isRunning = true;

        $('.button#pause').show();
        $('.button#stop').show();
        $('.button#start').hide();

        $('#div-clock-inputs').hide();
        $('#div-clock').show();
        $('#div-clock #clock-title').text('');

        // Play sound feedback
        blip.addEventListener('ended', function playEnded() {
            blip.removeEventListener('ended', playEnded, false);
            blip.play();
        });

        blip.play();
    } else {
        $('.button#pause').show();
        $('.button#start').hide();
    }

    timer = window.setInterval(tick, 1000);
}

function pause() {
    $('.button#pause').hide();
    $('.button#stop').show();
    $('.button#start').show();

    window.clearInterval(timer);
}

function stop() {
    isRunning = false;

    timeCount = 0;
    setClock(timeCount);

    $('.button#pause').hide();
    $('.button#stop').hide();
    $('.button#start').show();

    $('#div-clock-inputs').show();
    $('#div-clock').hide();

    $('#clock').removeClass('interval');

    window.clearInterval(timer);
}

// Typing Animation

var intervalTitle = "Intervalo";
var intervaTitleIndex = 0;
var intervalTitleTimer;

function showIntervalTitle() {
    intervaTitleIndex = 1;
    intervalTitleTimer = window.setInterval(tickIntervalTitleShow, 50);
}

function hideIntervalTitle() {
    intervaTitleIndex = intervalTitle.length;
    intervalTitleTimer = window.setInterval(tickIntervalTitleHide, 50);
}

function tickIntervalTitleShow() {
    $('#clock-title').text(intervalTitle.substring(0, intervaTitleIndex));
    intervaTitleIndex++;

    if (intervaTitleIndex > intervalTitle.length) {
        window.clearInterval(intervalTitleTimer);
    }
}

function tickIntervalTitleHide() {
    $('#clock-title').text(intervalTitle.substring(0, intervaTitleIndex));
    intervaTitleIndex--;

    if (intervaTitleIndex < 0) {
        window.clearInterval(intervalTitleTimer);
    }
}

// Background animation
var domBody;
var bgAnimTimer;
var sun;
var moon;

var colorMidnight = [10, 0, 83];
var colorMorning = [115, 185, 255];
var colorAfternoon = [77, 122, 255];
var colorNight = [0, 0, 64];
var colorLate = [26, 0, 102];

function initBgAnimation() {
    domBody = $('body');
    sun = $('#sun');
    moon = $('#moon');

    domBody.css('background-image', 'url()');
    refreshBackground();
    bgAnimTimer = window.setInterval(refreshBackground, 10000);

    // Turns dim off
    $("#dim-div").animate({
        opacity: 0
    });
}

function refreshBackground() {
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

    domBody.css('background-color', 'rgb(' + dimColor[0] + ',' + dimColor[1] + ',' + dimColor[2] + ')');

    // Sun and Moon positions
    var position = myLerp(-50, 150, nowSeconds / 86400);
    sun.css('bottom', position + '%');
    moon.css('top', (position - 100) + '%');
}

function myLerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}