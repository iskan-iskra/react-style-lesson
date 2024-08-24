import { useState } from "react";
import "./RectangleStyle.css";

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
        className={`RectangleClass ${componentColor}`}
      ></div>
    </>
  );
}
