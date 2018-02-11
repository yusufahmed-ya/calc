let selectedInput = "input1";
function onInputEnter(input) {
    var element = document.getElementById(selectedInput);
    element.value += input;
};

function onInputOperator(input) {
    var operator = document.getElementById("operator");
    operator.value = input;

    document.getElementById("input2").focus();
    onSelectedInputChange("input2");
};

function onSelectedInputChange(inputId) {
    selectedInput = inputId;
};

function onCalculate() {
    const input1 = document.getElementById("input1");
    const operator = document.getElementById("operator");
    const input2 = document.getElementById("input2");

    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    console.log("sum = " + num1 + operator.value + num2);
    let answer;
    if (operator.value === "+") {
        answer = num1 + num2;
    } else if (operator.value === "-") {
        answer = num1 - num2;
    } else if (operator.value === "÷") {
        answer = num1 / num2
    } else if (operator.value === "×") {
        answer = num1 * num2;
    };
    var output = document.getElementById("output");
    output.value = answer;
};

function onDelete() {
    const lastValue = document.getElementById(selectedInput).value;
    const newValue = lastValue.slice(0, -1);
    document.getElementById(selectedInput).value = newValue;
}

function onClear() {
    document.getElementById("input1").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").value = "";
    selectedInput = "input1";

}