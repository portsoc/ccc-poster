let stylesheets = [
    "",
    "stylesheets/1-vanilla-five-column.css",
    "stylesheets/2-stylish-five-column.css",
    "stylesheets/3-grid-layout.css"
];

let currentStylesheetIndex = 0;

function changeStylesheet() {
    currentStylesheetIndex = (currentStylesheetIndex + 1) % stylesheets.length;
    document.getElementById("stylesheet").setAttribute("href", stylesheets[currentStylesheetIndex]);
}

document.querySelector("#mainheading").addEventListener("click", changeStylesheet);
