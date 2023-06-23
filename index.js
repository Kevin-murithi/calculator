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

function funcDelete() {
    var screen = document.getElementById("screen");
    var currentInput = screen.value;

    // Remove the last character from the input
    var newInput = currentInput.slice(0, -1);

    // Update the input field with the new value
    screen.value = newInput;  
}