$(".clickable").mousedown(function (event) {
    switch (event.which) {
        case 1:
            window.location = $(this).attr("data-href");
            break;

        case 2:
            window.open($(this).attr("data-href"));
            break;
    }

});

window.onload = function () {
    runMarkdown();
};

function runMarkdown() {
    var containerDiv = document.getElementById('sourceTA');
    var text = containerDiv.innerText;
    var converter = new showdown.Converter();
    var html = converter.makeHtml(text);

    containerDiv.innerHTML = html;
}

/* Make all divs disappear with animation:
 $("li").not(this).animate(
        { height: 0 }, 500, function () {
            $(this).hide();
        }
    );

*/