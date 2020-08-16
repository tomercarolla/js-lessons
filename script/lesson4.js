var editor = CodeMirror(document.getElementById("codeEditorLesson4"), {
    value: "function checkLetter() {\n" +
        "    let i = 0;\n" +
        "    let sentence = document.getElementById(\"sentenceId\").value;\n" +
        "    let letter = document.getElementById(\"letterId\").value;\n" +
        "    let letterCount = 0;\n" +
        "    let exclamation = \"!!!\";\n" +
        "\n" +
        "    if (sentence == '' || letter == '' || letter.length > 1) {\n" +
        "        alert(\"Enter a sentece and a letter please\");\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    for (i; i < sentence.length; i++) {\n" +
        "        if (letter === sentence[i]) {\n" +
        "            letterCount++;\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    let text = `The letter ${letter} show in the sentence ${letterCount} times `;\n" +
        "\n" +
        "    text += letterCount >= 3 ? exclamation : '';\n" +
        "\n" +
        "    document.getElementById(\"myDiv\").innerHTML = text;\n" +
        "}\n" +
        "\n" +
        "function checkLetterIndex() {\n" +
        "    let j = 0;\n" +
        "    let sentence = document.getElementById(\"sentenceId\").value;\n" +
        "    let letter = document.getElementById(\"letterId\").value;\n" +
        "    //let letterPlace = 0;\n" +
        "    let letterPlaceWhile = 1;\n" +
        "\n" +
        "    if (sentence == '' || letter == '' || letter.length > 1) {\n" +
        "        alert(\"Enter a sentece and a letter please\");\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    while (j < sentence.length && letter != sentence[j]) {\n" +
        "\n" +
        "        letterPlaceWhile++;\n" +
        "\n" +
        "        j++;\n" +
        "    }\n" +
        "\n" +
        "    if (j == sentence.length) {\n" +
        "        document.getElementById(\"myDiv2\").innerHTML = `The letter ${letter} doesn't show in this sentence`;\n" +
        "    } else {\n" +
        "        document.getElementById(\"myDiv2\").innerHTML = `The letter ${letter} show in the index number ${letterPlaceWhile}`;\n" +
        "    }\n" +
        "\n" +
        "    //letterPlace = sentence.indexOf(letter) + 1;\n" +
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

function checkLetter() {
    let i = 0;
    let sentence = document.getElementById("sentenceId").value;
    let letter = document.getElementById("letterId").value;
    let letterCount = 0;
    let exclamation = "!!!";

    if (sentence == '' || letter == '' || letter.length > 1) {
        alert("Enter a sentece and a letter please");
        return;
    }

    for (i; i < sentence.length; i++) {
        if (letter === sentence[i]) {
            letterCount++;
        }
    }

    let text = `The letter ${letter} show in the sentence ${letterCount} times `;

    text += letterCount >= 3 ? exclamation : '';

    document.getElementById("myDiv").innerHTML = text;
}

function checkLetterIndex() {
    let j = 0;
    let sentence = document.getElementById("sentenceId").value;
    let letter = document.getElementById("letterId").value;
    //let letterPlace = 0;
    let letterPlaceWhile = 1;

    if (sentence == '' || letter == '' || letter.length > 1) {
        alert("Enter a sentece and a letter please");
        return;
    }

    while (j < sentence.length && letter != sentence[j]) {

        letterPlaceWhile++;

        j++;
    }

    if (j == sentence.length) {
        document.getElementById("myDiv2").innerHTML = `The letter ${letter} doesn't show in this sentence`;
    } else {
        document.getElementById("myDiv2").innerHTML = `The letter ${letter} show in the index number ${letterPlaceWhile}`;
    }

    //letterPlace = sentence.indexOf(letter) + 1;
}
