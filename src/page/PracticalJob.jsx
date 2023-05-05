import React from "react";
import styled from "styled-components";
import Pagehead from "../components/Pagehead";
import FloatingVideoPlayer from "../components/FloatingVideoPlayer";

function PracticalJob() {
  const kichenColor = "#e7cfc3";
  const departmentColor = "#dee9c9";
  return (
    <div>
      <PracticalJobStyle>
        <div className="P-head">
          <Pagehead color="#C0D4E0" title="Practical Work" />
        </div>

        <div className="P-main">
          <div className="content-section">
            {/* ---------------Bleieskift------------------- */}
            <div
              className="job Video"
              style={{ backgroundColor: departmentColor }}
            >
              <h2>Bleieskift</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <FloatingVideoPlayer videoUrl="/picture&videos/bråten5.mp4" />
            </div>

            {/* ----------Vasking av bord og feiing etter måltidet------ */}

            <div className="job Video" style={{ backgroundColor: kichenColor }}>
              <h2>Vasking av bord og feiing etter måltidet</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <FloatingVideoPlayer videoUrl="/picture&videos/bråten5.mp4" />
            </div>

            {/* ----------------Lage en kaffe----------------- */}

            <div className="job Video" style={{ backgroundColor: kichenColor }}>
              <h2>Lage en kaffe</h2>
              <p>Hvordan lage kaffe til folk</p>
              <FloatingVideoPlayer videoUrl="/picture&videos/bråten5.mp4" />
            </div>
            <div className="job ">
              <h2>CCCCC</h2>
            </div>
            <div className="job D">
              <h2>DDDD</h2>
            </div>
          </div>
        </div>
      </PracticalJobStyle>
    </div>
  );
}

export default PracticalJob;
const PracticalJobStyle = styled.div`
  @media screen and (max-width: 1198px) {
    .P-head {
      width: 100vw;
      height: 30vh;
    }
    .content-section {
      flex-direction: column;
      width: 100vw;
      padding: 0vw 7vw;
      padding-top: 6vh;

      display: flex;
      align-items: start;
      justify-content: space-around;
      gap: 4vh;
      .job {
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        padding: 4vw 5vw;
        background-color: #c0d4e0;
        h2 {
          letter-spacing: 0.1vw;
          font-size: 5.5vw;
        }
        p {
          font-size: 4vw;
        }
      }
    }
    .job.Video {
      display: flex;
      flex-direction: column;
      align-items: start;
      height: auto;
      gap: 1vh;
      justify-content: space-between;
    }
  }
`;
