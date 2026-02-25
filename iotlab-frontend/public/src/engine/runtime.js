class Runtime {
  constructor() {
    this.isRunning = false;
    this.loopFunction = null;
    this.intervalId = null;
  }

  // Extract setup() and loop() blocks
  parseFunctions(code) {
    const setupMatch = code.match(/void\s+setup\s*\(\)\s*\{([\s\S]*?)\}/);
    const loopMatch = code.match(/void\s+loop\s*\(\)\s*\{([\s\S]*?)\}/);

    const setupCode = setupMatch ? setupMatch[1] : "";
    const loopCode = loopMatch ? loopMatch[1] : "";

    return { setupCode, loopCode };
  }

  // Convert Arduino-like code into executable JS
  createExecutable(codeBlock, gpio) {
    return new Function("gpio", `
      ${codeBlock}
    `);
  }

  start(code, gpio) {
    if (this.isRunning) {
      this.stop();
    }

    const { setupCode, loopCode } = this.parseFunctions(code);

    try {
      const setupFunc = this.createExecutable(setupCode, gpio);
      const loopFunc = this.createExecutable(loopCode, gpio);

      // Run setup once
      setupFunc(gpio);

      // Run loop continuously
      this.loopFunction = loopFunc;
      this.isRunning = true;

      this.intervalId = setInterval(() => {
        if (this.loopFunction) {
          this.loopFunction(gpio);
        }
      }, 500); // loop interval (simulate MCU cycle)

    } catch (error) {
      console.error("Runtime error:", error);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.isRunning = false;
  }
}

const runtime = new Runtime();
export default runtime;
