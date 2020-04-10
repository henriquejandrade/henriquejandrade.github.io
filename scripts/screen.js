$(document).ready(this.resize);
$(window).resize(this.resize);

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