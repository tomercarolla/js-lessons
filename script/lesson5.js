var editor = CodeMirror(document.getElementById("codeEditorLesson4"), {
    value: "//Part A\n" +
        "function calc() {\n" +
        "    let numbers = document.getElementById(\"numbersInput\").value;\n" +
        "\n" +
        "    if (numbers === '') {\n" +
        "        alert('please enter numbers');\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    let numbersArray = numbers.split(\",\");\n" +
        "    let sortNumbersArray = numbersArray.sort(checkNumbers);\n" +
        "    let maxNumber = sortNumbersArray[sortNumbersArray.length - 1];\n" +
        "\n" +
        "    document.getElementById(\"myDiv\").innerHTML = `The high number is ${maxNumber} and the sort array is ${sortNumbersArray}`\n" +
        "}\n" +
        "\n" +
        "//Sort Compare Function\n" +
        "function checkNumbers(a, b) {\n" +
        "    return a - b;\n" +
        "}\n" +
        "\n" +
        "//Part A\n" +
        "function calcForLoop() {\n" +
        "    let numbers = document.getElementById(\"numbersInput\").value;\n" +
        "\n" +
        "    if (numbers === '') {\n" +
        "        alert('please enter numbers');\n" +
        "        return;\n" +
        "    }\n" +
        "\n" +
        "    let numbersArray = numbers.split(\",\")\n" +
        "    let maxNumber = numbersArray[0];\n" +
        "\n" +
        "    for (let i = 1; i < numbersArray.length; i++) {\n" +
        "        if (maxNumber < numbersArray[i]) {\n" +
        "            maxNumber = numbersArray[i];\n" +
        "        }\n" +
        "    }\n" +
        "\n" +
        "    document.getElementById(\"myDivFor\").innerHTML = `The high number is ${maxNumber}`;\n" +
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

//Part A
function calc() {
    let numbers = document.getElementById("numbersInput").value;

    if (numbers === '') {
        alert('please enter numbers');
        return;
    }

    let numbersArray = numbers.split(",");
    let sortNumbersArray = numbersArray.sort(checkNumbers);
    let maxNumber = sortNumbersArray[sortNumbersArray.length - 1];

    document.getElementById("myDiv").innerHTML = `The high number is ${maxNumber} and the sort array is ${sortNumbersArray}`
}

//Sort Compare Function
function checkNumbers(a, b) {
    return a - b;
}

//Part A
function calcForLoop() {
    let numbers = document.getElementById("numbersInput").value;

    if (numbers === '') {
        alert('please enter numbers');
        return;
    }

    let numbersArray = numbers.split(",")
    let maxNumber = numbersArray[0];

    for (let i = 1; i < numbersArray.length; i++) {
        if (maxNumber < numbersArray[i]) {
            maxNumber = numbersArray[i];
        }
    }

    document.getElementById("myDivFor").innerHTML = `The high number is ${maxNumber}`;
}
