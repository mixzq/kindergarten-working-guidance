import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

function Mainpage() {
  return (
    <MainpageStyle>
      <div className="Main">
        {/* ---------header section---------- */}
        <div className="header_section">
          <div className="header_left">
            <div className="banner_main">
              <div className="banner_title">
                <h1>Arbeidsbok</h1>
                <div className="banner_text">
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias velit sunt veritatis dolor libero, quae quis omnis
                    odio ad impedit necessitatibus exercitationem est. Nesciunt
                    accusantium, laboriosam ullam aliquam voluptas ut?
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="header_right">
            <h3>Welcome to Bråten barnehagen</h3>
            <br />
            <div className="welcomeVideo">welcome video</div>
          </div>
        </div>
        {/* ---------header section---------- */}

        {/* ---------Practical information section---------- */}

        <div className="practicalInfo-section">
          <div className="practicalInfo-Left">
            <h1>Daily base info </h1>
            <h4>eg. check sheculd</h4>
          </div>
        </div>
        {/* ---------Practical information section---------- */}

        {/* ---------basic work section---------- */}
        <div className="basicWork-section">
          <div className="basicWork-Left">
            <h1>Basic work i barnehagen</h1>
            <div className="basicWork-carGroup">
              <div className="bW-car a">
                <Card />
              </div>
              <div className="bW-car b">
                <Card />
              </div>
              <div className="bW-car b">
                <Card />
              </div>
            </div>
          </div>
        </div>
        {/* ---------basic work section---------- */}
      </div>
    </MainpageStyle>
  );
}

export default Mainpage;
const MainpageStyle = styled.div`
  .header_section {
    padding: 2vh 3vw;
    display: flex;
    .header_left {
      width: 50%;
      .banner_title {
        font-size: 2vw;
        .banner_text {
          font-size: 1.5vw;
        }
      }
    }
  }

  .practicalInfo-section {
    width: 100%;
    height: 30vh;

    background-color: none;
  }

  @media screen and (max-width: 1198px) {
    .Main {
      width: 100vw;

      .header_section {
        padding: 8vh 3vw;
        display: flex;
        flex-direction: column;
        .header_left {
          width: 100%;
          .banner_title {
            font-size: 5vw;
            .banner_text {
              font-size: 5vw;
              border-left: 1vw solid #e15a56;
              h6 {
                margin-left: 3vw;
              }
            }
          }
        }
        .header_right {
          margin-top: 8vw;
          width: 100%;
        }
        .welcomeVideo {
          width: 80%;
          height: 50vw;
          background-color: #7fb564;
        }
      }

      .practicalInfo-section {
        padding: 2vh;
        background-color: #e15a56;
      }

      .basicWork-section {
        padding: 2vh;
        background-color: none;
      }
      .basicWork-carGroup {
        display: flex;
        gap: 2vw;

        justify-content: flex-start;
        flex-wrap: wrap;
        .bW-car {
        }
      }
    }
  }
`;
