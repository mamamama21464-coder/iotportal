import React from "react";
import LED from "./LED";
import CodeEditor from "./CodeEditor";

export default function Simulator() {
  return (
    <div style={styles.container}>
      
      {/* Left Side - Hardware Area */}
      <div style={styles.hardwarePanel}>
        <h2 style={styles.heading}>Virtual Breadboard</h2>

        <div style={styles.espBox}>
          <p style={{ margin: 0 }}>ESP32 (Pin 2 → LED)</p>
        </div>

        <div style={styles.ledContainer}>
          <LED />
          <p style={{ marginTop: 10 }}>Connected to GPIO 2</p>
        </div>
      </div>

      {/* Right Side - Code Area */}
      <div style={styles.codePanel}>
        <h2 style={styles.heading}>Code Editor</h2>
        <CodeEditor />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#1e1e1e",
    color: "white",
  },

  hardwarePanel: {
    flex: 1,
    padding: "30px",
    borderRight: "1px solid #333",
  },

  codePanel: {
    flex: 1,
    padding: "30px",
  },

  heading: {
    marginBottom: "20px",
  },

  espBox: {
    padding: "20px",
    backgroundColor: "#2c2c2c",
    borderRadius: "8px",
    marginBottom: "30px",
  },

  ledContainer: {
    marginTop: "20px",
  },
};
