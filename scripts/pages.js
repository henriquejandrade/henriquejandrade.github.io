var menuOriginalPosition = 0;
$(document).ready(function () {
    // Appearance
    var topBarHeight = $('#top-bar').height();
    $('#icon-top-bar').width($('#top-bar').height());
    $('.nav-button').height(topBarHeight);
    // $('.icon').each(function () {
    //     $(this).width($(this).parent().height());
    // });

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

    $.ajax({
        url: "https://pt.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content",
        success: function (data) {
            alert(getTitle(data));
        },
        error: function (xhr, error) {
            alert(xhr);
            alert(error);
        }
    });
});

function getTitle(data) {
    let pages = data.query.pages;
    let firstKey = Object.keys(pages)[0];
    return pages[firstKey].title;
}