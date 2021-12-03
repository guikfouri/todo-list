import styled from "styled-components";

const getBackgroundColor = (color) =>
  ({
    blue: "linear-gradient(272.09deg, #f5f5f5 32.81%, #daefff 100%)",
    purple: "linear-gradient(272.09deg, #f5f5f5 32.81%, #f3edff 100%)",
    green: "linear-gradient(272.09deg, #f5f5f5 32.81%, #e0fff2 100%)",
    red: "linear-gradient(272.09deg, #f5f5f5 32.81%, #ffe1dc 100%)",
  }[color] || "#FFFFFF");

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  backdrop-filter: blur(50px);
  border-radius: 24px;
  flex: none;
  // order: 1;
  // align-self: stretch;
  // flex-grow: 0;
  // margin: 14px 0px;

  :hover {
    background: ${(props) => getBackgroundColor(props.color)};
  }
`;

export const Title = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 0;
  color: #333333;
  text-decoration-line: ${(props) => (props.isDone ? "line-through" : "unset")};
`;

export const Button = styled.button``;
