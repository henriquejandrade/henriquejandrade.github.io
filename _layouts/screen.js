$(document).ready(resize);
$(window).resize(resize);

function resize() {
    var windowWidth = $('#screen').parent().width();
    var windowHeight = $('#screen').parent().height();

    var width = 0;
    var height = 0;

    // Virtual parent div
    if (windowHeight > (192 / 256) * windowWidth) {
        width = windowWidth;
        height = 192 / 256 * width;
    } else {
        height = windowHeight;
        width = 256 / 192 * height;
    }

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