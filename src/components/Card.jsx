import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardStyle>
      <div class="card">
        <img
          class="card-img-top"
          src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">Coffee making</h4>
          <p>how to use coffe machine</p>
        </div>
      </div>
    </CardStyle>
  );
}

export default Card;
const CardStyle = styled.div`
  .card {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0.7rem;
    margin: 2vw;
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #e1f0ce;
    img {
      padding: 4%;
      border-radius: 0.7rem;
      width: 100%;
      height: 200px;
    }
    .card-body {
      margin: 1rem 0.5rem;
      background-color: #e1f0ce;
      h4 {
      }
      p {
        font-style: italic;
        font-size: small;
      }
    }
  }
`;
