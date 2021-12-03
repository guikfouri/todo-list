import React, { useState } from "react";
import { Container, Title, Button } from "./styles";
import { ClayCheckbox } from "@clayui/form";

function TodoItem({ item, removeItem }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <Container color={item.color}>
      <ClayCheckbox
        checked={isDone}
        onChange={() => setIsDone((val) => !val)}
        containerProps={{
          style: { margin: "24px 29px" },
        }}
      />
      <Title isDone={isDone}>{item.title}</Title>
      <Button onClick={removeItem}> X </Button>
    </Container>
  );
}

export default TodoItem;
