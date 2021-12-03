import React, { useState } from "react";
import { Container, Title } from "./styles";
import TodoItem from "../TodoItem/index";
import NewTodoItem from "../NewTodoItem/index";
import Row from "../Row/index";
import Col from "../Col/index";

const TodoContainer = ({}) => {
  const [items, setItems] = useState([]);

  const removeItem = (todoItem) => {
    setItems(items.filter((item) => item != todoItem));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Title>TO DO</Title>
          {items.map((item, i) => (
            <TodoItem key={i} item={item} removeItem={() => removeItem(item)} />
          ))}
        </Col>

        <Col>
          <NewTodoItem addTodoItem={(item) => setItems([...items, item])} />
        </Col>
      </Row>
    </Container>
  );
};

export default TodoContainer;
