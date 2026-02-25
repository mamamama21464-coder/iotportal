import React from "react";

export default function Breadboard() {
  const rows = 10;
  const cols = 30;

  return (
    <div style={styles.board}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={colIndex}
              style={styles.hole}
              data-row={rowIndex}
              data-col={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  board: {
    backgroundColor: "#f5f5dc",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },

  row: {
    display: "flex",
  },

  hole: {
    width: "10px",
    height: "10px",
    margin: "4px",
    backgroundColor: "#ccc",
    borderRadius: "50%",
  },
};
