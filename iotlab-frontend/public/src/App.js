import React from "react";
import Simulator from "./components/Simulator";

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>IoT Embedded Simulation Lab</h1>
        <p style={styles.subtitle}>
          Virtual ESP32 Environment
        </p>
      </header>

      <main style={styles.main}>
        <Simulator />
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#111",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    padding: "20px 40px",
    borderBottom: "1px solid #222",
    backgroundColor: "#181818",
  },

  title: {
    margin: 0,
    fontSize: "24px",
  },

  subtitle: {
    margin: "5px 0 0 0",
    fontSize: "14px",
    color: "#aaa",
  },

  main: {
    padding: "30px 40px",
  },
};

export default App;
