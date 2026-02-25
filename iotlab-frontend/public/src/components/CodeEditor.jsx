import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { runCode } from "../engine/interpreter";

export default function CodeEditor() {
  const [code, setCode] = useState(
`void setup() {
  digitalWrite(2, HIGH);
}

void loop() {

}`
  );

  const handleRun = () => {
    runCode(code);
  };

  return (
    <div style={styles.container}>
      <Editor
        height="300px"
        defaultLanguage="cpp"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />

      <button style={styles.button} onClick={handleRun}>
        Run Code
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  button: {
    padding: "10px",
    backgroundColor: "#00ff88",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
