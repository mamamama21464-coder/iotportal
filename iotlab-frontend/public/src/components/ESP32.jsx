import React, { useEffect, useState } from "react";
import gpio from "../engine/gpioEngine";

export default function ESP32() {
  const [pinStates, setPinStates] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      // Track few GPIO pins for now
      const updatedPins = {
        2: gpio.getPin(2),
        4: gpio.getPin(4),
        5: gpio.getPin(5),
      };

      setPinStates(updatedPins);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h3 style={{ marginBottom: "10px" }}>ESP32</h3>

      <div style={styles.pinContainer}>
        {Object.keys(pinStates).map((pin) => (
          <div
            key={pin}
            style={{
              ...styles.pin,
              backgroundColor: pinStates[pin] ? "#00ff88" : "#444",
            }}
          >
            GPIO {pin}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "12px",
    width: "200px",
    boxShadow: "0 0 15px rgba(0,0,0,0.4)",
  },

  pinContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  pin: {
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    color: "white",
    textAlign: "center",
  },
};
