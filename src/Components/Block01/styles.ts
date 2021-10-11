import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 160px;

  img {
    margin-right: 10px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 0;
    justify-content: center;
  }
`;
