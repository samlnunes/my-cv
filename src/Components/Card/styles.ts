import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    height: 434px;
    cursor: pointer;
  }
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }

  @media only screen and (max-width: 1200px) {
    img {
      width: auto;
      height: auto;
      margin: 0 10px;
    }
    :hover {
      opacity: 0.9;
      transition: 0.3s;
    }

    p {
      margin: 10px 0 50px 0;
    }
  }
`;
