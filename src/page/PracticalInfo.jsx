import React from "react";
import styled from "styled-components";
import Pagehead from "../components/Pagehead";
import PDFButton from "../components/PDFButton";
import FloatingVideoPlayer from "../components/FloatingVideoPlayer";
import { FadeIn } from "../components/FadeIn";

function PracticalInfo() {
  return (
    <div>
      <FadeIn>
        <PracticalInfoStyle>
          <div className="P-head">
            <Pagehead color="#C0E0DE" title="Practical information" />
          </div>

          <div className="content-section">
            <div className="info A">
              <h2>Gjør dette før du starter dagen</h2>
              <p>Sjekk rutinevideoen</p>
              <FloatingVideoPlayer videoUrl="/dagligRutine.mp4" />
              <p>Bilder of krysselisten og ukeplanboka</p>
              <PDFButton pdfUrl="/krysselisten.pdf" />
            </div>
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
      </FadeIn>
    </div>
  );
}

export default PracticalInfo;
const PracticalInfoStyle = styled.div`
  .P-head {
    width: 100%;
    height: 30vh;
  }
  .content-section {
    flex-direction: column;
    width: 100%;
    padding: 0vw 5vw;
    padding-top: 6vh;

    display: flex;
    align-items: start;
    justify-content: space-around;
    gap: 2vh;
    .info {
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      height: auto;
      background-color: #e9f8f7;
      h2 {
        font-size: 2vw;
        font-weight: 800;
      }
      p {
        font-size: 1.5vw;
      }
    }
  }
  .info.A {
    min-width: 60vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2vw 1.5vw;
    gap: 1vh;
  }
  @media screen and (max-width: 980px) {
    .P-head {
      width: 100%;
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
        width: 90vw;
        height: auto;
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
      padding-left: 4vw;
      padding-top: 2vh;
      gap: vh;
      justify-content: space-between;
    }
  }
`;
