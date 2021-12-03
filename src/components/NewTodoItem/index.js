import React, { useState } from "react";
import ColorOptions from "../ColorOptions/index";
import { Input, Container } from "./styles";

const NewTodoItem = ({ addTodoItem }) => {
  const [itemTitle, setItemTitle] = useState();

  return (
    <Container>
      <ColorOptions
        addTodoItem={(color) => addTodoItem({ title: itemTitle, color })}
      />

      <Input
        placeholder="Add new item"
        onChange={(event) => setItemTitle(event.target.value)}
      />
    </Container>
  );
};

export default NewTodoItem;
