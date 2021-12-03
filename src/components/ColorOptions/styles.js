import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  border: 0;
  background: white;
  color: #666666;
`;

const getBackgroundColor = (color) =>
  ({
    blue: "#0892fc",
    purple: "#7f43ff",
    green: "#00a863",
    red: "#ff6f59",
  }[color] || "#FFFFFF");

export const ColorBtn = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: ${(props) => getBackgroundColor(props.color)};
`;
