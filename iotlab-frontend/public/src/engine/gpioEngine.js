class GPIOEngine {
  constructor() {
    this.pins = {};
    this.modes = {};
    this.listeners = [];
  }

  // Set pin mode (INPUT / OUTPUT)
  pinMode(pin, mode) {
    this.modes[pin] = mode;
    if (!this.pins[pin]) {
      this.pins[pin] = 0;
    }
  }

  // Write value to pin
  digitalWrite(pin, value) {
    if (this.modes[pin] !== "OUTPUT") return;

    this.pins[pin] = value ? 1 : 0;
    this.notify(pin);
  }

  // Read value from pin
  digitalRead(pin) {
    return this.pins[pin] || 0;
  }

  // Direct set (for simulation tools if needed)
  setPin(pin, value) {
    this.pins[pin] = value ? 1 : 0;
    this.notify(pin);
  }

  // Subscribe components (LED, ESP32 view etc.)
  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify(pin) {
    this.listeners.forEach((cb) => cb(pin, this.pins[pin]));
  }
}

const gpio = new GPIOEngine();
export default gpio;
