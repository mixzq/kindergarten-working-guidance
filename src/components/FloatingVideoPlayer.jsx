import React, { useState } from "react";
import styled from "styled-components";

const FloatingVideoPlayer = ({ videoUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
    setShowOverlay(!showOverlay);
  };
  //style

  const playerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    // make the frame center:
    transform: "translate(-50%, -50%)",
    //
    backgroundColor: "#000000",
    padding: "5vw 0vw",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    zIndex: "100",
  };
  //--------------------------------------------
  return (
    <VideoButtonStyle>
      <div className="floating-video-player">
        {showOverlay && <div className="overLayer"></div>}

        <button className="videoButton" onClick={togglePlayer}>
          VIDEO
        </button>
        {showPlayer && (
          <div className="floating-player" style={playerStyle}>
            <button className="closeButton" onClick={togglePlayer}>
              X
            </button>
            <iframe
              marginwidth="0"
              marginheight="0"
              display="block"
              src={videoUrl}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              // style={{
              //   width: "90vw",
              //   height: "40vh",
              //   margin: "0",
              //   padding: "0",
              // }}
            />
          </div>
        )}
      </div>
    </VideoButtonStyle>
  );
};

export default FloatingVideoPlayer;

const VideoButtonStyle = styled.div`
  .overLayer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(46, 46, 46, 0.8);
    backdrop-filter: blur(3px);
    z-index: 1;
  }
  .closeButton {
    padding: 0vw;
    font-size: 1.5vw;
    font-weight: bold;
    background-color: #000000;
    color: white;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .videoButton {
    padding: 0.5vw 1vw;
    font-size: 1vw;
    font-weight: 600;
    letter-spacing: 0;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 12px;
    margin-bottom: 0px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  iframe {
    width: 80vw;
    height: 70vh;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 1198px) {
    .videoButton {
      padding: 1vw 3vw;
      font-size: 4vw;
      font-weight: 600;
      letter-spacing: 0.3vw;
      background-color: #000000;
      color: white;
      border: none;
      border-radius: 12px;
      margin-bottom: 0px;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    .closeButton {
      padding: 0vw;
      font-size: 5vw;
      font-weight: bold;
      background-color: #000000;
      color: white;
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    iframe {
      width: 95vw;
      height: 25vh;
      margin: 0;
      padding: 0;
    }

    .overLayer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(46, 46, 46, 0.8);
      backdrop-filter: blur(3px);
      z-index: 1;
    }
  }
`;
