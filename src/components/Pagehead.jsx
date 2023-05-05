import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Pagehead({ color, title }) {
  return (
    <PageheadStyle color={color}>
      <div>
        <div className="top-Color"></div>
        <div className="back-button">
          <Link to="/">BACK</Link>
        </div>
        <div className="title">{title}</div>
      </div>
    </PageheadStyle>
  );
}

export default Pagehead;

const PageheadStyle = styled.div`
  @media screen and (max-width: 1198px) {
    .top-Color {
      position: absolute;
      top: 0%;
      width: 100vw;
      height: 58vh;
      background-color: ${(props) => props.color};
      clip-path: ellipse(83% 42% at 36% 9%);
      z-index: -1;
    }
    .back-button {
      position: relative;
      width: 20vw;
      background-color: black;
      text-align: center;
      border-radius: 2vw;
      padding: 1.5vw 0vw;
      left: 7vw;
      top: 4vh;
      a {
        font-size: 5vw;
        font-weight: 600;
        color: white;
        text-decoration: none;
      }
    }
    .title {
      position: relative;
      left: 7vw;
      top: 7vh;
      width: 40vw;
      font-size: 8vw;
      font-weight: 650;
    }
  }
`;
