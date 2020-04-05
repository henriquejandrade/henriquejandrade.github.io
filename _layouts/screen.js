$(document).ready(resize);
$(window).resize(resize);

function resize() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var width = 0;
    var height = 0;
    if (windowHeight > (2 / 3) * windowWidth) {
        width = windowWidth;
        height = 2 / 3 * width;
    } else {
        height = windowHeight;
        width = 3 / 2 * height;
    }

    $('#screen-borders').width(width);
    $('#screen-borders').height(height);
}