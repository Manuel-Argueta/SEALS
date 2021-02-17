let chosenOp = '';
let additionClicked = false;
let subtractClicked = false;
let divideClicked = false;
let multiplyClicked = false;
document.getElementById('addition').addEventListener('click', confirmAdd);
document.getElementById('subtraction').addEventListener('click', confirmSubtract);
document.getElementById('division').addEventListener('click', confirmDivide);
document.getElementById('multiply').addEventListener('click', confirmMultiply);
document.getElementById('clear').addEventListener('click', clearResult);
document.getElementById('calculate').addEventListener('click', calculateTotal);

function calculateTotal() {
    let result = 0;
    let fNum = document.getElementById('first-num').value;
    let sNum = document.getElementById('second-num').value;
    console.log(fNum, sNum);
    if (additionClicked == true) {
        chosenOp = '+';
    }
    if (subtractClicked == true) {
        chosenOp = '-';
    }
    if (divideClicked == true) {
        chosenOp = '/';
    }
    if (multiplyClicked == true) {
        chosenOp = '*';
    }
    console.log(chosenOp);
    if (chosenOp == '+') {
        result = parseInt(fNum) + parseInt(sNum);
        console.log(result);
        document.getElementById('result').value = result;
    } else if (chosenOp == '-') {
        result = fNum - sNum;
        console.log(result);
        document.getElementById('result').value = result;
    } else if (chosenOp == '/') {
        result = fNum / sNum;
        console.log(result);
        document.getElementById('result').value = result;
    } else if (chosenOp == '*') {
        result = fNum * sNum;
        console.log(result);
        document.getElementById('result').value = result;
    }
    additionClicked = false;
    subtractClicked = false;
    divideClicked = false;
    multiplyClicked = false;
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
}

function clearResult() {
    document.getElementById('result').value = "";
    console.log("cleared text");
}

function confirmAdd() {
    additionClicked = true;
    console.log("addition clicked")
}

function confirmSubtract() {
    subtractClicked = true;
    console.log("subtraction clicked")
}

function confirmDivide() {
    divideClicked = true;
    console.log("divide clicked")
}

function confirmMultiply() {
    multiplyClicked = true;
    console.log("multiply clicked")
}