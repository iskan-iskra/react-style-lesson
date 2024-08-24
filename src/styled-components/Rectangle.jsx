import { useState } from "react";
import styled from "styled-components";

const RectangleComponent = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${(props) => props.componentColor || "black"};
`;

export default function () {
  const [componentColor, setComponentColor] = useState("black");

  const changeColor = () =>
    componentColor === "blue"
      ? setComponentColor("red")
      : setComponentColor("blue");

  return (
    <>
      <RectangleComponent
        onClick={changeColor}
        componentColor={componentColor}
      />
    </>
  );
}
