import React, { useEffect, useState } from "react";
import gpio from "../engine/gpioEngine";

export default function LED({ pin = 2, color = "red" }) {
  const [state, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = gpio.getPin(pin);
      setState(value);
    }, 100);

    return () => clearInterval(interval);
  }, [pin]);

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.led,
          backgroundColor: state ? color : "#333",
          boxShadow: state
            ? `0 0 20px ${color}, 0 0 40px ${color}`
            : "none",
        }}
      />
      <p style={styles.label}>
        GPIO {pin} → {state ? "ON" : "OFF"}
      </p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },

  led: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    transition: "all 0.2s ease",
  },

  label: {
    marginTop: "10px",
    fontSize: "12px",
    color: "white",
  },
};
