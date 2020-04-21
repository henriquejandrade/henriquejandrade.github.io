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