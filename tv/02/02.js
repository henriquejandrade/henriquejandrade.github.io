var clock;
var buttonPause;
var buttonStop;
var buttonStart;

var timer;
var totalTime = 60;
var timeCount = 0;
var isRunning = false;

$(document).ready(function () {
    timeCount = 0;

    clock = $('#clock');

    $('.button#pause').hide();
    $('.button#stop').hide();
    $('.button#start').show();
});

function tick() {
    setClock(timeCount);
    timeCount++;
}

function setClock(time) {
    var timeString = new Date(time * 1000).toISOString().substr(14, 5);
    clock.text(timeString);
}

function start() {
    if (!isRunning) {
        isRunning = true;

        $('.button#pause').show();
        $('.button#stop').show();
        $('.button#start').hide();

        timer = window.setInterval(tick, 1000);
    }
}

function pause() {
    isRunning = false;

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

    window.clearInterval(timer);
}