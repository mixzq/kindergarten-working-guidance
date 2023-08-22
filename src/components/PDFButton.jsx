import React from "react";
import styled from "styled-components";

function PDFButton({ pdfUrl }) {
  return (
    <Pdfstyle>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        PDF
      </a>
    </Pdfstyle>
  );
}

export default PDFButton;
const Pdfstyle = styled.div`
  a {
    padding: 0.5vw 1vw;
    font-size: 1vw;
    font-weight: 600;
    letter-spacing: 0;
    background-color: #9f0707;
    color: white;
    border: none;
    border-radius: 12px;
    margin-bottom: 0px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }

  @media screen and (max-width: 1198px) {
    a {
      padding: 1vw 4vw;
      font-size: 4.5vw;
      background-color: #9f0707;
      color: white;
      border: none;
      border-radius: 12px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 20px;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
