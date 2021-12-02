import React from "react";
import { Container } from "./styles";

const Row = ({ children, containerStyle, className }) => (
  <Container className={className} style={containerStyle}>
    {children}
  </Container>
);

export default Row;
