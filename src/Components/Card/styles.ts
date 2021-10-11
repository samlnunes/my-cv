import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 33%;

  img {
    height: 434px;
    cursor: pointer;
  }
  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
