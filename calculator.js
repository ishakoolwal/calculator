// script.js
let display = document.getElementById('display');

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Toggle light/dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const currentMode = body.classList.contains('dark-mode') ? '🌙' : '🌞';
    document.querySelector('.mode-toggle').textContent = currentMode;
}

// Keypress support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendValue(key);
    }
});
