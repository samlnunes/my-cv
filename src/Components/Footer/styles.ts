import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 75px 115px 75px 160px;
  font-size: 15px;
  font-weight: 300;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #111;
    margin-left: 15px;
  }
`;
