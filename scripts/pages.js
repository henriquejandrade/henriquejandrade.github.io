var originalColor;

$(document).ready(function () {
    // Set up
    isWindowActive = true;

    // Appearance
    $('#icon-top-bar').width($('#top-bar').height());

    // Window events
    $(window).focus(function () {
        isWindowActive = true;
    });

    $(window).blur(function () {
        isWindowActive = false;
    });

    // Back button
    $('#top-bar').hover(
        function () {
            $("#icon-rolled-img-top-bar").animate({
                margin: "0",
            }, 250);

            $("#icon-img-top-bar").animate({
                margin: "100% 0 0 0",
            }, 250);
        },
        function () {
            $("#icon-rolled-img-top-bar").animate({
                margin: "-100% 0 0 0",
            }, 250);

            $("#icon-img-top-bar").animate({
                margin: "0",
            }, 250);
        }
    );

    // Back button animation
    $('#icon-top-bar').mousedown(function (event) {
        // Color
        originalColor = $(this).css("background");
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
    });

    $('#icon-top-bar').mouseup(function () {
        $(this).css("background", originalColor);
    })

    // Text Roulette
    setInterval(() => {
        if (isWindowActive) {
            $("#top-rolled-bar-title").animate({
                margin: "0",
            }, 500);
            $("#top-bar-title").animate({
                margin: "100% 0 0 0",
            }, 500,
                function () {
                    $("#top-bar-title").css("margin", "0");
                    $("#top-rolled-bar-title").css("margin-top", "-100%");

                    var rolledContent = $("#top-rolled-bar-title").html();
                    $("#top-rolled-bar-title").html($("#top-bar-title").html());
                    $("#top-bar-title").html(rolledContent);
                });
        }
    }, 30 * 1000);
});

/**/