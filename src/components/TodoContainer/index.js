import React, { useState } from "react";
import Container from "./styles";
import TodoItem from "../TodoItem/index";

function TodoContainer({}) {
  const [items, setItems] = useState([]);

  return (
    <Container>
      <Row>
        <Column>
          <h1>TO DO</h1>
          {items.forEach((item) => (
            <TodoItem item={item} />
          ))}
        </Column>

        <Column>
          <NewItem />
        </Column>
      </Row>
    </Container>
  );
}

export default TodoContainer;
