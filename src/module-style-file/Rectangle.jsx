import { useState } from "react";
import style from "./Rectangle.module.css";

export default function () {
  const [componentClass, setComponentClass] = useState([style.RectangleClass]);
  const changeColor = () =>
    componentClass.includes(style.blue)
      ? setComponentClass([style.RectangleClass, style.red])
      : setComponentClass([style.RectangleClass, style.blue]);
  return (
    <>
      <div onClick={changeColor} className={componentClass.join(" ")}></div>
    </>
  );
}
