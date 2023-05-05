import React from "react";
import styled from "styled-components";
import Pagehead from "../components/Pagehead";
import PDFButton from "../components/PDFButton";

function PracticalInfo() {
  return (
    <div>
      <PracticalInfoStyle>
        <div className="P-head">
          <Pagehead color="#C0E0DE" title="Practical information" />
        </div>

        <div className="content-section">
          <div className="info A">
            <h2>How to use Kidplane</h2>
            <p>
              How to use Kidplane to check ukeplaner and how use it in daily
              bases
            </p>
            <PDFButton pdfUrl="/test2.pdf" />
          </div>
        </div>
      </PracticalInfoStyle>
    </div>
  );
}

export default PracticalInfo;
const PracticalInfoStyle = styled.div`
  @media screen and (max-width: 1198px) {
    .P-head {
      width: 100vw;
      height: 30vh;
    }
    .content-section {
      flex-direction: column;
      width: 100vw;
      padding: 0vw 5vw;
      padding-top: 6vh;

      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 2vh;
      .info {
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70vw;
        height: 6vh;
        background-color: #c0e0de;
        h2 {
          letter-spacing: 0.2vw;
          font-size: 6vw;
        }
        p {
          font-size: 4vw;
        }
      }
    }
    .info.A {
      display: flex;
      flex-direction: column;
      align-items: start;
      height: 22vh;
      padding-left: 4vw;
      padding-top: 2vh;
      gap: 1vh;
      justify-content: space-between;
    }
  }
`;
