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
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Doc
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Others
            </a>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
}

export default Nav;
const NavStyle = styled.div`
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
        width: 18vw;
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
      }
    }
  }
`;
