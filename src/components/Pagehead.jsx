import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

console;

function Pagehead({ color, title }) {
  return (
    <PageheadStyle color={color}>
      <div className="head">
        <div className="top-Color"></div>
        <div className="back-button">
          <Link to="/" className="link">
            BACK
          </Link>
        </div>
        <div className="title">{title}</div>
      </div>
    </PageheadStyle>
  );
}

export default Pagehead;

const PageheadStyle = styled.div`
  .head {
    width: 100%;
    height: auto;
  }
  .top-Color {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 58vh;
    background-color: ${(props) => props.color};
    clip-path: ellipse(83% 42% at 36% 9%);
    z-index: -1;
  }
  .back-button {
    position: relative;
    width: fit-content;
    background-color: black;
    text-align: center;
    border-radius: 20px;
    top: 4vh;
    left: 3vw;
    .link {
      padding: 0.5vw 1.5vw;
      font-size: 1.5vw;
      font-weight: 600;
      color: #ffffff;
      border-radius: 1vw;
      background-color: black;
      text-decoration: none;
    }
  }
  .title {
    position: relative;
    left: 7vw;
    top: 7vh;
    width: 40vw;
    font-size: 6vh;
    font-weight: 650;
  }

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
      width: fit-content;
      background-color: non;
      text-align: center;
      border-radius: 20px;
      top: 4vh;
      left: 3vw;
      .link {
        padding: 2vw 4vw;
        font-size: 4vw;
        font-weight: 600;
        color: #ffffff;
        border-radius: 2vw;
        background-color: black;
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
