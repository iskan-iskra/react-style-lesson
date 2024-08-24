import { useState } from "react";

export default function () {
  const [componentColor, setComponentColor] = useState("black");

  const changeColor = () =>
    componentColor === "blue"
      ? setComponentColor("red")
      : setComponentColor("blue");
  return (
    <>
      <div
        onClick={changeColor}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: componentColor || "black",
        }}
      ></div>
    </>
  );
}
