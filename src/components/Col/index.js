import React from "react";
import { Container } from "./styles";

const Col = ({ children, containerStyle, className }) => (
  <Container className={className} style={containerStyle}>
    {children}
  </Container>
);

export default Col;
