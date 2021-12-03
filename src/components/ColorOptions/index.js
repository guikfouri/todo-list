import React, { useState } from "react";
import { Container, Button, ColorBtn } from "../ColorOptions/styles";
import { colorOptions } from "./constants";
import ClayDropDown from "@clayui/drop-down";

const ColorOptions = ({ addTodoItem }) => {
  const [active, setActive] = useState(false);

  return (
    <Container className="dropdown">
      <ClayDropDown
        trigger={<Button>+</Button>}
        active={active}
        onActiveChange={setActive}
        menuElementAttrs={{
          className: "my-custom-dropdown-menu",
          containerProps: {
            className: "dropdown-menu-react-portal-div",
            id: "dropdownMenuReactPortalDiv",
          },
        }}
      >
        <ClayDropDown.ItemList
          style={{
            display: "flex",
            background: "#F5F5F5",
            borderRadius: "8px",
            width: "166px",
          }}
        >
          {colorOptions.map((color, i) => (
            <ClayDropDown.Item key={i} style={{ padding: "8px 0 8px 14px" }}>
              <ColorBtn
                key={color + i}
                color={color}
                onClick={() => addTodoItem(color)}
              />
            </ClayDropDown.Item>
          ))}
        </ClayDropDown.ItemList>
      </ClayDropDown>
      <ColorBtn className="red" onClick={() => addTodoItem("red")} />
    </Container>
  );
};

export default ColorOptions;
