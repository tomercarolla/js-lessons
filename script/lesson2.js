var editor = CodeMirror(document.getElementById("codeEditorLesson2"), {
    value: "let total = '';\n" +
        "\n" +
        "function calcPrice() {\n" +
        "    let tileValue = document.getElementById(\"tileValue\").value;\n" +
        "\n" +
        "    if (tileValue != \"C\" && tileValue != \"R\") {\n" +
        "        alert(`you need to type C or R`);\n" +
        "        return;\n" +
        "\n" +
        "    } else if (tileValue === \"C\") {\n" +
        "        let cmRadius = parseInt(document.getElementById(\"cmRadius\").value);\n" +
        "\n" +
        "        if (cmRadius == null || isNaN(cmRadius)) {\n" +
        "            alert(`you didn't put radius`);\n" +
        "            return;\n" +
        "        }\n" +
        "\n" +
        "        total = cmRadius * 3.14;\n" +
        "    } else {\n" +
        "        let cmWidth = parseInt(document.getElementById(\"cmWidth\").value);\n" +
        "        let cmHeight = parseInt(document.getElementById(\"cmHeight\").value);\n" +
        "\n" +
        "        if (cmWidth == null || isNaN(cmWidth) || cmHeight == null || isNaN(cmHeight)) {\n" +
        "            alert(`you didn't put width and height`);\n" +
        "            return;\n" +
        "        }\n" +
        "\n" +
        "        total = cmWidth * cmHeight;\n" +
        "\n" +
        "    }\n" +
        "\n" +
        "    document.getElementById(\"myDiv\").innerHTML = 'Total: ' + total;\n" +
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

let total = '';

function calcPrice() {
    let tileValue = document.getElementById("tileValue").value;

    if (tileValue != "C" && tileValue != "R") {
        alert(`you need to type C or R`);
        return;

    } else if (tileValue === "C") {
        let cmRadius = parseInt(document.getElementById("cmRadius").value);

        if (cmRadius == null || isNaN(cmRadius)) {
            alert(`you didn't put radius`);
            return;
        }

        total = cmRadius * 3.14;
    } else {
        let cmWidth = parseInt(document.getElementById("cmWidth").value);
        let cmHeight = parseInt(document.getElementById("cmHeight").value);

        if (cmWidth == null || isNaN(cmWidth) || cmHeight == null || isNaN(cmHeight)) {
            alert(`you didn't put width and height`);
            return;
        }

        total = cmWidth * cmHeight;

    }

    document.getElementById("myDiv").innerHTML = 'Total: ' + total;
}
