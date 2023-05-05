import React, { useState } from "react";
import styled from "styled-components";

const FloatingVideoPlayer = ({ videoUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="floating-video-player">
      {showOverlay && (
        <Overlay>
          <div className="overLayer"></div>
        </Overlay>
      )}

      <button
        onClick={togglePlayer}
        style={{
          padding: "1vw 3vw",
          fontSize: "4vw",
          fontWeight: "600",
          letterSpacing: "0.3vw",
          backgroundColor: "#000000",
          color: "white",
          border: "none",
          borderRadius: "12px",
          marginBottom: "0px",
          cursor: "pointer",
        }}
      >
        VIDEO
      </button>
      {showPlayer && (
        <div
          className="floating-player"
          style={{
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
          }}
        >
          <button
            onClick={togglePlayer}
            style={{
              padding: "vw",
              fontSize: "5vw",
              fontWeight: "bold",
              backgroundColor: "#000000",
              color: "white",
              border: "none",

              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          >
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
            style={{
              width: "95vw",
              height: "auto",
              margin: "0",
              padding: "0",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingVideoPlayer;

const Overlay = styled.div`
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
`;
