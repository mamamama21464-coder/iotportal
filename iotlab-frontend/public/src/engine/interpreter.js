import gpio from "./gpioEngine";
import runtime from "./runtime";

// Arduino-like constants
const HIGH = 1;
const LOW = 0;
const OUTPUT = "OUTPUT";
const INPUT = "INPUT";

// Wrapper that injects Arduino-style API
function createArduinoEnvironment(userCode) {
  return `
    const HIGH = 1;
    const LOW = 0;
    const OUTPUT = "OUTPUT";
    const INPUT = "INPUT";

    function pinMode(pin, mode) {
      gpio.pinMode(pin, mode);
    }

    function digitalWrite(pin, value) {
      gpio.digitalWrite(pin, value);
    }

    function digitalRead(pin) {
      return gpio.digitalRead(pin);
    }

    ${userCode}
  `;
}

export function runCode(code) {
  try {
    // Stop previous execution
    runtime.stop();

    // Reset basic pin setup (optional for MVP)
    gpio.pinMode(2, OUTPUT);

    // Wrap user code with Arduino-like helpers
    const wrappedCode = createArduinoEnvironment(code);

    // Start runtime
    runtime.start(wrappedCode, gpio);

  } catch (error) {
    console.error("Interpreter Error:", error);
  }
}
