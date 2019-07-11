var currentColors = [];
var currentIcons = [];

var morningColors = [
    "#401E01",
    "#FFD24D",
    "#FFFF99",
    "#DDDDDD",
    "#FFFFBF",
    "#BFCFFF"
];

var morningIcons = [
    "symbols/hnrqndrd.png",
    "nature/sun.png"
];

var afternoonColors = [
    "#022601",
    "#73FF73",
    "#B3FF99",
    "#DDDDDD",
    "#CFFFBF",
    "#DFBFFF"
];

var afternoonIcons = [
    "symbols/hnrqndrd.png",
    "nature/cloud.png"
];

var eveningColors = [
    "#000040",
    "#4D7AFF",
    "#7396FF",
    "#DDDDDD",
    "#BFCFFF",
    "#FFFFBF"
];

var eveningIcons = [
    "symbols/hnrqndrd.png",
    "nature/moon.png"
];

var isWindowActive;
var currentIcon = 0;
var nextIcon = 1;

$(document).ready(function () {
    // Set up
    isWindowActive = true;

    // Appearance
    $('#icon-top-bar').width($('#top-bar').height());
    $('#chat-top-bar').height($('#top-bar').height());
    $('#chat-close-icon-top-bar').width($('#chat-top-bar').height())

    var bottomHeight = $('#bottom-bar').height();
    $('#icon-bottom-bar').width(bottomHeight);
    $('#clock-bottom-bar').width(2 * bottomHeight);
    $('#input-bottom-bar').width($('#bottom-bar').width() - ((2 * bottomHeight) + bottomHeight));

    // Window events
    $(window).focus(function () {
        isWindowActive = true;
    });

    $(window).blur(function () {
        isWindowActive = false;
    });

    $('#chat-close-icon-top-bar').click(function () {
        $("#chat-div").animate({
            top: "90%",
        }, 250);
    });

    // General Theme
    setTheme();
    setInterval(function () {
        setTheme();
    }, 15 * 60 * 1000);

    // Icon Roulette
    setInterval(() => {
        if (isWindowActive) {
            $("#icon-rolled-img-top-bar").animate({
                margin: "0",
            }, 500);
            $("#icon-img-top-bar").animate({
                margin: "100% 0 0 0",
            }, 500,
                function () {
                    $("#icon-img-top-bar").css("margin", "0");
                    $("#icon-rolled-img-top-bar").css("margin-top", "-100%");

                    currentIcon = (currentIcon < currentIcons.length - 1) ? (currentIcon + 1) : 0;
                    nextIcon = currentIcon + 1;
                    nextIcon = (nextIcon >= currentIcons.length) ? 0 : nextIcon;

                    $("#icon-img-top-bar").attr('src', 'icons/' + currentIcons[currentIcon]);
                    $("#icon-rolled-img-top-bar").attr('src', 'icons/' + currentIcons[nextIcon]);
                });
        }
    }, 30 * 1000);

    // Console
    $('#input-bottom-bar textarea').focus(function () {
        $("#chat-div").animate({
            top: "10%",
        }, 250);
    });

    // Preset clock
    var rightNow = new Date($.now());
    var hourNow = ("0" + rightNow.getHours()).slice(-2);
    var minuteNow = ("0" + rightNow.getMinutes()).slice(-2);
    $('#clock-bottom-bar p').text(hourNow + ":" + minuteNow);

    //Clock
    setInterval(function () {
        var rightNow = new Date($.now());
        var hourNow = ("0" + rightNow.getHours()).slice(-2);
        var minuteNow = ("0" + rightNow.getMinutes()).slice(-2);
        $('#clock-bottom-bar p').text(hourNow + ":" + minuteNow);
    }, 1000);
});

$('#icon-img-top-bar').ready(function () {
    $("#icon-img-top-bar").animate({
        margin: "0",
    }, 500);
});

function setTheme() {
    var rightNow = new Date($.now());
    var hourNow = rightNow.getHours();

    if (hourNow >= 18) {
        setColorsArray(eveningColors);
        setIconsArray(eveningIcons);
    } else if (hourNow >= 12) {
        setColorsArray(afternoonColors);
        setIconsArray(afternoonIcons);
    } else if (hourNow >= 6) {
        setColorsArray(morningColors);
        setIconsArray(morningIcons);
    } else {
        setColorsArray(eveningColors);
        setIconsArray(eveningIcons);
    }
}

function setColorsArray(colors) {
    currentColors = colors;

    $('#top-bar').css("background", colors[1]);
    $('#content-div').css("background", colors[3]);
    $('.box').css("background", colors[4]);
    $('.button-box').css("background", colors[4]);
    $('.button-box').hover(function () {
        $(this).css("background", colors[5]);
    },
        function () {
            $(this).css("background", colors[4]);
        });
    $('.button-box').mousedown(function () {
        $(this).css("background", "white");

        // Navigation
        if ($(this).attr("href")) {
            switch (event.which) {
                case 1:
                    window.location = $(this).attr("href");
                    break;

                case 2:
                    window.open($(this).attr("href"));
                    break;
            }
        }

        if ($(this).attr("out-href")) {
            window.open($(this).attr("out-href"));
        }
    })
    $('.button-box').mouseup(function () {
        $(this).css("background", colors[5]);
    })
    $('#input-bottom-bar').css("background", colors[2]);
    $('#icon-bottom-bar').css("background", colors[1]);
    $('#clock-bottom-bar').css("background", colors[1]);
}

function setIconsArray(icons) {
    currentIcons = icons;
    $('#icon-img-top-bar').attr('src', 'icons/' + currentIcons[currentIcon]);
    $('#icon-rolled-img-top-bar').attr('src', 'icons/' + currentIcons[nextIcon]);
}