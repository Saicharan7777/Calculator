const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0' || display.innerText === 'Invalid') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText.length === 0) display.innerText = '0';
}

function calculateResult() {
  try {
    const result = eval(display.innerText);
    display.innerText = Number.isFinite(result) ? result : 'Invalid';
  } catch (e) {
    display.innerText = 'Invalid';
  }
}
