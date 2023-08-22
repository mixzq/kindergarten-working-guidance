import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/Nav";
import { FadeIn } from "../components/FadeIn";

function Mainpage() {
  return (
    <div>
      <FadeIn>
        <Nav />
        <MainpageStyle>
          <div className="Main">
            {/* ---------header section---------- */}
            <div className="header_section">
              <div className="header_left">
                <div className="banner_main">
                  <div className="banner_title">
                    <h1>Velkommen til Bråten barnehagen</h1>
                    <div className="banner_text">
                      <h6>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Alias velit sunt veritatis dolor libero, quae quis
                        omnis
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header_right">
                <div className="welcomeVideo">welcome video</div>
              </div>
            </div>
            {/* ---------header section---------- */}

            {/* ---------Arbeidsbok section---------- */}

            <div className="Arbeidsbok">
              <div className="Arbeidsbok-Left">
                <h1>Arbeidsbok</h1>
              </div>
              <div className="Arbeidsbok-Right">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias velit sunt veritatis dolor libero, quae (the purpose of
                  this app)
                </p>
              </div>
            </div>
            {/* ---------Arbeidsboksection---------- */}

            {/* ---------pages section---------- */}
            <div className="pages-section">
              <div className="page A">
                <Link to="/PracticalInfo">Informasjon Du Burde Vite</Link>
              </div>
              <div className="page B">
                <Link to="/PracticalJob">Enkel Oppgave Du Kan Begynne Med</Link>
              </div>
              <div className="page C">
                <a href="#">Oppgaver Som Tilhører De Ulike Vaktene</a>
              </div>
            </div>
            {/* ---------pages section---------- */}

            {/* ---------tilbakemelding---------- */}
            <div className="feedBack"></div>
          </div>
        </MainpageStyle>
      </FadeIn>
    </div>
  );
}

export default Mainpage;
const MainpageStyle = styled.div`
  .Main {
    width: 90%;
    padding: 5vh 4vw;

    .header_section {
      display: flex;
      flex-direction: column;
      .header_left {
        width: 100%;
        .banner_title {
          font-size: 3vw;
          h1 {
            padding-bottom: 3vh;
            font-weight: 400;
          }
          .banner_text {
            font-size: 3vw;
            border-left: 1vw solid #e15a56;
            h6 {
              margin-left: 3vw;
            }
          }
        }
      }
      .header_right {
        margin-top: 6vw;
        width: 100%;
      }
      .welcomeVideo {
        width: 65%;
        height: 20vw;
        background-color: #f0e7e7;
      }
    }

    .Arbeidsbok {
      width: 80%;
      padding: 5vh 0vh;
      .Arbeidsbok-Left {
        h1 {
          font-weight: 600;
          padding-bottom: 2vh;
        }
      }
      .Arbeidsbok-Right {
        border-left: 1vw solid #e15a56;
        p {
          font-size: 2vw;
          padding-left: 2vw;
        }
      }
    }

    .pages-section {
      padding-top: 4vh;
      padding-bottom: 10vh;
      display: flex;
      align-items: center;

      gap: 5vh;
      .page {
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        max-width: 95vw;
        height: auto;
        background-color: #c0e0de;
        box-shadow: 0px 1px 2px rgba(6, 6, 6, 0.25);

        a {
          padding: 1vw 1vw;
          font-size: 1vw;
          font-weight: 600;
          text-decoration: none;
          color: black;
        }
      }
      //page backgroundcolor
      .B {
        background-color: #c0d4e0;
      }
      .C {
        background-color: #f3a268;
      }
      .D {
        background-color: #d6e0c0;
      }
      .E {
        background-color: #fbd190;
      }
    }
  }

  @media screen and (max-width: 1198px) {
    .Main {
      width: 100vw;
      padding: 0vh 0vw;

      .header_section {
        padding: 5vh 4vw;
        display: flex;
        flex-direction: column;
        .header_left {
          width: 100%;
          .banner_title {
            font-size: 5vw;
            h1 {
              padding-bottom: 3vh;
              font-weight: 400;
            }
            .banner_text {
              font-size: 7vw;
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
          width: 95%;
          height: 50vw;
          background-color: #f0e7e7;
        }
      }

      .Arbeidsbok {
        width: 100%;
        padding: 2vh;
        .Arbeidsbok-Left {
          h1 {
            font-weight: 400;
            padding-bottom: 2vh;
          }
        }
        .Arbeidsbok-Right {
          border-left: 1vw solid #e15a56;
          p {
            font-size: 4vw;
            padding-left: 3vw;
          }
        }
      }

      .pages-section {
        width: 100%;
        padding-top: 6vh;
        padding-bottom: 10vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4vh;
        .page {
          min-width: 40vw;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          max-width: 95vw;
          height: auto;
          background-color: #c0e0de;

          a {
            padding: 3vw 6vw;
            font-size: 4vw;
            font-weight: 600;
            text-decoration: none;
            color: black;
          }
        }
        //page backgroundcolor
        .B {
          background-color: #c0d4e0;
        }
        .C {
          background-color: #f3a268;
        }
        .D {
          background-color: #d6e0c0;
        }
        .E {
          background-color: #fbd190;
        }
      }
    }
  }
`;
