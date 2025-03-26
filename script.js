let resultField = document.getElementById("result");
let historyList = document.getElementById("historyList");

// Function to append values to the input field
function appendValue(value) {
    resultField.value += value;
}

// Function to clear the input field
function clearResult() {
    resultField.value = "";
}

// Function to clear last entry
function clearEntry() {
    resultField.value = resultField.value.slice(0, -1);
}

// Function to delete last character (backspace)
function backspace() {
    resultField.value = resultField.value.slice(0, -1);
}

// Function to toggle between light and dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Function to toggle sign
function toggleSign() {
    let value = parseFloat(resultField.value);
    if (!isNaN(value)) {
        resultField.value = value * -1;
    }
}

// Function to calculate the square of a number
function squareNumber() {
    let value = parseFloat(resultField.value);
    if (!isNaN(value)) {
        resultField.value = Math.pow(value, 2);
    } else {
        resultField.value = "Error";
    }
}

// Function to calculate the square root of a number
function squareRoot() {
    let value = parseFloat(resultField.value);
    if (!isNaN(value) && value >= 0) {
        resultField.value = Math.sqrt(value);
    } else {
        resultField.value = "Error";
    }
}

// Function to calculate the reciprocal of a number
function reciprocal() {
    let value = parseFloat(resultField.value);
    if (!isNaN(value) && value !== 0) {
        resultField.value = 1 / value;
    } else {
        resultField.value = "Error";
    }
}

// Function to evaluate the expression
function calculateResult() {
    try {
        let expression = resultField.value
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(');
        let result = eval(expression);
        historyList.innerHTML += `<li>${resultField.value} = ${result}</li>`;
        resultField.value = result;
    } catch (error) {
        resultField.value = "Error";
    }
}
