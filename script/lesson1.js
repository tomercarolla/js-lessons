var editor = CodeMirror(document.getElementById("codeEditorLesson1"), {
    value: "function averageCalc() {\n" +
        "    let textOne = parseInt(document.getElementById(\"textOne\").value);\n" +
        "    let textTwo = parseInt(document.getElementById(\"textTwo\").value);\n" +
        "    let textThree = parseInt(document.getElementById(\"textThree\").value);\n" +
        "\n" +
        "    let total = (textOne + textTwo + textThree) / 3;\n" +
        "\n" +
        "    document.getElementById(\"myDiv\").innerHTML = total;   \n" +
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

function averageCalc() {
    let textOne = parseInt(document.getElementById("textOne").value);
    let textTwo = parseInt(document.getElementById("textTwo").value);
    let textThree = parseInt(document.getElementById("textThree").value);

    let total = (textOne + textTwo + textThree) / 3;

    document.getElementById("myDiv").innerHTML = total;
}
