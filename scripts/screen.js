//$(document).ready(this.resize);
$(document).ready(function () {
    $('.button').click(function (event) {
        var href = $(this).attr("href");
        var outRef = $(this).attr("out-href");

        slideTransitionUp(
            function () {
                navigate(
                    event, 
                    href, 
                    outRef)
            })
    });

    resize();
});
$(window).resize(resize);

function resize() {
    var windowWidth = $('#screen').parent().width();
    var windowHeight = $('#screen').parent().height();

    var width = 0;
    var height = 0;

    // Calculates aspect display
    var wAspect = 3;
    var hAspect = 2;

    if (windowHeight > (hAspect / wAspect) * windowWidth) {
        width = windowWidth;
        height = hAspect / wAspect * width;
    } else {
        height = windowHeight;
        width = wAspect / hAspect * height;
    }

    // Calculates scaling
    var sWidth = width;
    var sHeight = height;

    if (width > height) {
        sHeight = height;
        sWidth = 256 * sHeight / 192;
    } else {
        sWidth = width;
        sHeight = sWidth * 192 / 256;
    }

    var scaleWidth = sWidth / 256;
    var scaleHeight = sHeight / 192;

    $('#screen').css(
        'transform',
        'translate(-50%, -50%) ' +
        'scale(' + scaleWidth + ', ' + scaleHeight + ')'
    );
}

function navigate(event, url, isOutRef) {
    // Navigation
    if (url) {
        switch (event.which) {
            case 1:
                window.location = url;// $(this).attr("href");
                break;

            case 2:
                window.open(url);
                break;
        }
    } else if (isOutRef) {
        window.open($(this).attr("out-href"));
    }
}

function slideTransitionUp(funcComplete) {
    $('#div-transition').animate({
        top: 0
    },
        {
            duration: 250,
            complete: funcComplete
        });
}
