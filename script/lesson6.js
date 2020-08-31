var editor = CodeMirror(document.getElementById("codeEditorLesson6"), {
    value: "function calc() {\n" +
        "    let rectangleWidth = +document.getElementById(\"rectangleWidth\").value;\n" +
        "    let rectangleHeight = +document.getElementById(\"rectangleHeight\").value;\n" +
        "\n" +
        "    if (rectangleWidth <= 0 || isNaN(rectangleWidth) || rectangleHeight <= 0 || isNaN(rectangleHeight)) {\n" +
        "        alert(\"Please enter number values bigger than 0\");\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    let area = areaRectangle(rectangleWidth, rectangleHeight);\n" +
        "    let perimeter = perimeterRectangle(rectangleWidth, rectangleHeight);\n" +
        "\n" +
        "    showResults(area, perimeter);\n" +
        "}\n" +
        "\n" +
        "function areaRectangle(x, y) {\n" +
        "    return x * y;\n" +
        "}\n" +
        "\n" +
        "function perimeterRectangle(x, y) {\n" +
        "    return 2 * (x + y);\n" +
        "}\n" +
        "\n" +
        "function showResults(area, perimeter) {\n" +
        "    document.getElementById(\"myDiv\").innerHTML = `The area of rectangle is ${area} and the perimeter of rectangle is ${perimeter}`;\n" +
        "}",
    mode: "javascript",
    tabSize: 5,
    theme: 'lesser-dark',
    scrollbarStyle: 'overlay',
    styleActiveLine: true,
    keyMap: "emacs",
    lineNumbers: true,
    firstLineNumber: 1,
    extraKeys: {"Ctrl-Space": "autocomplete"}
});

function calc() {
    let rectangleWidth = +document.getElementById("rectangleWidth").value;
    let rectangleHeight = +document.getElementById("rectangleHeight").value;

    if (rectangleWidth <= 0 || isNaN(rectangleWidth) || rectangleHeight <= 0 || isNaN(rectangleHeight)) {
        alert("Please enter number values bigger than 0");
        return;
    }

    let area = areaRectangle(rectangleWidth, rectangleHeight);
    let perimeter = perimeterRectangle(rectangleWidth, rectangleHeight);

    showResults(area, perimeter);
}

function areaRectangle(x, y) {
    return x * y;
}

function perimeterRectangle(x, y) {
    return 2 * (x + y);
}

function showResults(area, perimeter) {
    document.getElementById("myDiv").innerHTML = `The area of rectangle is ${area} and the perimeter of rectangle is ${perimeter}`;
}
