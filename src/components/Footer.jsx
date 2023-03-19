import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <div className="footer">
        <p> copyright©2022.ZHANGQING.All rights reserved</p>
      </div>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.div`
  .footer {
    width: 100vw;

    bottom: 0%;
    height: 15px;
  }
  p {
    text-align: center;
    padding: 2px 0 0 0;

    background-color: #727272;
    font-size: x-small;
    color: #ffffff;
  }
  @media screen and (max-width: 1198px) {
    p {
      text-align: center;
      padding: 2px 0 0 0;

      background-color: #727272;
      font-size: x-small;
      color: #ffffff;
    }
  }
`;
