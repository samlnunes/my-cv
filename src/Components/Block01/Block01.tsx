import React from "react";

import { Container } from "./styles";

import { Card } from "..";

const Block01: React.FC = () => {
  return (
    <Container>
      <Card
        src="https://images.squarespace-cdn.com/content/v1/530ce101e4b0ad38dc397cb5/1550452157054-7QRJDCUGVEJAZRCDHXP8/leao1-web.jpg"
        text="LEÃO"
      />
      <Card
        src="https://images.squarespace-cdn.com/content/v1/530ce101e4b0ad38dc397cb5/1550452654653-96VQ4GDLSRT4DTQP7RWD/elefante01.jpg"
        text="ELEFANTE"
      />
      <Card
        src="https://images.squarespace-cdn.com/content/v1/530ce101e4b0ad38dc397cb5/1550452416142-O74L1M8PPMAVUQJMOPZC/leoa2-web.jpg"
        text="LEOA"
      />
    </Container>
  );
};

export default Block01;
