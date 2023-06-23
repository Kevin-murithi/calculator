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
    var newInput = currentInput.slice(0, -1);
    screen.value = newInput;  
}

function appreciation() {
    console.log("thank you for using my calculator");
}

