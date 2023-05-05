import React from "react";

function PDFButton({ pdfUrl }) {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "1.5vw 4vw",
        fontSize: "4.5vw",
        backgroundColor: "#000000",
        color: "white",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      PDF
    </a>
  );
}

export default PDFButton;
