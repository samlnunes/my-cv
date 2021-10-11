import React from "react";

import { Container } from "./styles";

interface CardProps {
  src: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ src, text }) => {
  return (
    <Container>
      <img src={src} alt={text} />
      <p>{text}</p>
    </Container>
  );
};

export default Card;
