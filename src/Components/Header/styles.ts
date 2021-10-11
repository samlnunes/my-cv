import styled from "styled-components";

export const Container = styled.div`
  padding: 75px 160px;
  display: flex;
  justify-content: space-between;
`;

export const Infos = styled.div`
  h1 {
    color: #222;
    font-weight: 300;
    font-size: 24px;
  }

  h2 {
    color: #ddd;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
  }

  a {
    font-size: 11px;
    font-weight: 400;
    color: #111;
    margin-left: 30px;
    text-decoration: none;
    letter-spacing: 1px;
  }
`;
