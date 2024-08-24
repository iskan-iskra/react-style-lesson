import { useState } from "react";
import style from "./ProductCard.module.scss";

export default function ProductCard({ imgColor, productPrice }) {
  const [state, setState] = useState(true);

  return (
    <div className={style.card__wrapper}>
      <div className={style.card__title}>Product title</div>
      <div
        className={`${style.card__img} ${style[imgColor] || style.red}`}
      ></div>
      <div className={style["card__property-list"]}>
        <div className={style["card__property-item"]}>
          <div>cost</div>
          <div>
            {Number.isInteger(productPrice) ? productPrice + "$" : "free"}
          </div>
        </div>
        <div className={style["card__property-item"]}>
          <div>property</div>
          <div>very nice</div>
        </div>
        <div className={style["card__property-item"]}>
          <div>color</div>
          <div>{imgColor || "red"}</div>
        </div>
      </div>
      <div className={style.card__info}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
        dignissimos odio tempora atque error deleniti, neque illum, totam sit
        labore fugiat modi dolorem eveniet quisquam fugit velit laboriosam
        quibusdam!
      </div>
      <div className={style["card__btn-wrapper"]}>
        <button
          onClick={() => setState((val) => !val)}
          className={`${style.card__btn} ${state ? style.buy : style.cancel}`}
        >
          {state ? "buy" : "cancel"}
        </button>
      </div>
    </div>
  );
}
