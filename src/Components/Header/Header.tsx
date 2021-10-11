import React from "react";

import { Container, Infos, Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Infos>
        <h1>MALU SENA</h1>
        <h2>TEACHER</h2>
      </Infos>
      <Menu>
        <ul>
          <li>
            <a href="/">PROJECTS</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
