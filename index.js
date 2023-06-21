function func(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    const expression = document.getElementById('screen').value;
    const result = eval(expression);
    document.getElementById('result').value = result;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function clearResult() {
    document.getElementById('result').value = '';
}

function clearDisplay() {
    clearScreen();
    clearResult();
}