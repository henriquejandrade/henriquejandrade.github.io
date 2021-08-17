// JavaScript Document

window.onload = function() {
    addPageTitle("Henrique Andrade");

    addItem("Resume");
    addItem("Artwork");
    addItem("UI Art");
    addItem("Imagine");
    addItem("Music");
};

function addItem(text) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "item");

    var iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "iconDiv");
    iconDiv.innerHTML = " ";
    newDiv.appendChild(iconDiv);

    var titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "titleDiv");
    titleDiv.innerHTML = text;
    newDiv.appendChild(titleDiv);

    document.getElementById("working_id").appendChild(newDiv);
}

function addPageTitle(title) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "item");
    newDiv.setAttribute("id", "pageTitle");

    var iconDiv = document.createElement("div");
    iconDiv.className = "iconDiv";
    iconDiv.innerHTML = " ";
    newDiv.appendChild(iconDiv);

    var titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "pageTitleContent");
    titleDiv.setAttribute("class", "titleDiv");
    titleDiv.innerHTML = title;
    newDiv.appendChild(titleDiv);

    document.getElementById("working_id").appendChild(newDiv);
}