import React from "react";

import { BoxInfos, Container } from "./styles";
import { SiInstagram, SiLinkedin } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <Container>
      <BoxInfos>
        <p>
          Powered by
          <a href="https://www.linkedin.com/in/samlnunes/">
            {" "}
            Samuel Leite Nunes
          </a>
        </p>
      </BoxInfos>
      <BoxInfos>
        <a href="https://www.instagram.com/samlnunes/">
          <SiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/samlnunes/">
          <SiLinkedin />
        </a>
      </BoxInfos>
    </Container>
  );
};

export default Footer;
