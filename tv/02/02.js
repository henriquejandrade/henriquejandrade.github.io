var clock;
var buttonPause;
var buttonStop;
var buttonStart;

var timer;
var totalTime = 60;
var timeCount = 0;

var isRunning = false;
var isInterval = false;

$(document).ready(function () {
    timeCount = 0;

    clock = $('#clock');

    $('.button#pause').hide();
    $('.button#stop').hide();
    $('.button#start').show();

    $('#div-clock').hide();

    initCanvas();
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
            drawBox();
        }
    } else {
        if (timeCount >= totalTime) {
            isInterval = false;

            timeCount = 0;
            totalTime = 60 * parseInt($('#block-time').val());

            $('#clock').toggleClass('interval');

            // Animate interval hide title
            hideIntervalTitle();
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

var intervalTitle = "Interval";
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
var canvasContext;
var backgroundBoxIndex;

function initCanvas() {
    canvasContext = document.getElementById('bgCanvas').getContext('2d');
    backgroundBoxIndex = 0;
}

function drawBox() {
    canvasContext.fillStyle = "#DED2FF";
    var i = 32 * (backgroundBoxIndex % 8);
    var j = 32 * Math.trunc(backgroundBoxIndex / 8);
    canvasContext.fillRect(i, j, 32, 32);

    backgroundBoxIndex++;
}