var menuOriginalPosition = 0;
$(document).ready(function () {
    // Appearance
    var topBarHeight = $('#top-bar').height();
    $('#icon-top-bar').width($('#top-bar').height());
    $('.nav-button').height(topBarHeight);
    $('.icon').each(function () {
        $(this).width($(this).parent().height());
    });

    $('.button').click(function (event) {
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
    });
});

