var editor = CodeMirror(document.getElementById("codeEditorLesson3"), {
    value: "let total = '';\n" +
        "\n" +
        "function calcNumber() {\n" +
        "    let number = +document.getElementById(\"numberID\").value;\n" +
        "    let i = 1;\n" +
        "    let j = '';\n" +
        "    let total = 1;\n" +
        "\n" +
        "    if (isNaN(number) || number <= 0) {\n" +
        "        alert(\"Enter a number bigger than 0\");\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    for (i; i <= number; i++) {\n" +
        "        total = total * i;\n" +
        "\n" +
        "        if (i == number) {\n" +
        "            j += i;\n" +
        "        } else {\n" +
        "            j += i + \"*\";\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    document.getElementById(\"myDiv\").innerHTML = 'Total: ' + j + \"=\" + total;\n" +
        "}\n" +
        "\n" +
        "//While" +
        "\n"+
        "function calcNumberWhile() {\n" +
        "    let number = +document.getElementById(\"numberID\").value;\n" +
        "    let i = 1;\n" +
        "    let j = '';\n" +
        "    let total = 1;\n" +
        "\n" +
        "    if (isNaN(number) || number <= 0) {\n" +
        "        alert(\"Enter a number bigger than 0\");\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    while (i <= number) {\n" +
        "        total = total * i;\n" +
        "\n" +
        "        if (i == number) {\n" +
        "            j += i;\n" +
        "        } else {\n" +
        "            j += i + \"*\";\n" +
        "        }\n" +
        "\n" +
        "        i++;\n" +
        "    }\n" +
        "\n" +
        "    document.getElementById(\"myDiv\").innerHTML = 'Total: ' + j + \"=\" + total;\n" +
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

function calcNumber() {
    let number = +document.getElementById("numberID").value;
    let i = 1;
    let j = '';
    let total = 1;

    if (isNaN(number) || number <= 0) {
        alert("Enter a number bigger than 0");
        return;
    }

    for (i; i <= number; i++) {
        total = total * i;

        if (i == number) {
            j += i;
        } else {
            j += i + "*";
        }
    }

    document.getElementById("myDiv").innerHTML = 'Total: ' + j + "=" + total;
}

function calcNumberWhile() {
    let number = +document.getElementById("numberID").value;
    let i = 1;
    let j = '';
    let total = 1;

    if (isNaN(number) || number <= 0) {
        alert("Enter a number bigger than 0");
        return;
    }

    while (i <= number) {
        total = total * i;

        if (i == number) {
            j += i;
        } else {
            j += i + "*";
        }

        i++;
    }

    document.getElementById("myDiv").innerHTML = 'Total: ' + j + "=" + total;
}
