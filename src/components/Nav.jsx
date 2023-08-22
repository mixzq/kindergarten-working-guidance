import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Nav() {
  return (
    <NavStyle>
      <div className="navBar">
        <ul className="menuBody">
          <li className="nav-item">
            <a className="nav-link" href="#">
              NYHETER
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              DOC
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              VIDEOS
            </a>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
}

export default Nav;
const NavStyle = styled.div`
  .navBar {
    padding-top: 5vh;
    width: 100%;
    display: flex;
  }

  .menuBody {
    width: 100%;
    gap: 5vw;
    padding: 0vw 4vw;
    display: flex;
    align-items: center;
    list-style: none;
    .nav-item {
      width: auto;
      border: 0.2vw solid #1a1a1a;
      border-radius: 4px;
      display: flex;
      justify-content: center;
    }

    .nav-link {
      font-size: 1vw;
      color: #333333;
      text-decoration: none;
      margin: 0.5vw 2vw;
      font-weight: 600;
    }
  }
  //mobile
  @media screen and (max-width: 1198px) {
    * {
      /* border: solid 1px blue; */
    }
    .navBar {
      padding-top: 5vh;
      width: 100vw;
      display: flex;
    }

    .menuBody {
      width: 100%;
      gap: 3vw;
      padding: 0vw 4vw;
      display: flex;
      align-items: center;
      list-style: none;
      .nav-item {
        width: auto;
        border: 0.7vw solid #1a1a1a;
        border-radius: 4px;
        display: flex;
        justify-content: center;
      }

      .nav-link {
        color: #333333;
        text-decoration: none;
        margin: 1vw 2vw;
        font-weight: 600;
        font-size: 4vw;
      }
    }
  }
`;
