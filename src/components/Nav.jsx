import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Nav() {
  const [open, setopen] = useState(false);
  const menuSwitch = (event) => {
    event.preventDefault();
    setopen(!open);
  };

  return (
    <NavStyle>
      <div className="navBar">
        <button onClick={menuSwitch}>
          <span class="material-symbols-outlined">menu</span>
        </button>

        <ul className={`menuBody ${open ? "show" : ""}`}>
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
      position: fixed;
      padding: 0vw 0vw;
      width: 100vw;
      display: flex;
      background-color: transparent;

      .material-symbols-outlined {
        padding: 5px;
      }
    }

    button {
      width: 10vw;
      background-color: rgb(151, 171, 253);
      border: none;
      cursor: pointer;
    }

    .menuBody {
      width: 100%;
      background-color: rgba(151, 171, 253, 0.99);
      /* backdrop-filter: blur(35px); */
      padding: 0vw 2vw;
      display: flex;
      align-items: center;
      list-style: none;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s;
      pointer-events: none;

      li {
        width: 100%;
      }
      a {
        font-size: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
    .menuBody.show {
      transition: 0.3s;
      opacity: 1;
    }

    .nav-link {
      color: #333333;
      text-decoration: none;
    }
  }
`;
