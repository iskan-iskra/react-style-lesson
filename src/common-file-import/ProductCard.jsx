import { useState } from "react";
import "./ProductCardStyle.scss";

export default function ({ imgColor, productPrice }) {
  const [state, setState] = useState(true);

  return (
    <>
      <div className="card__wrapper">
        <div className="card__title">Product title</div>
        <div className={`card__img ${imgColor || "red"}`}></div>
        <div className="card__property-list">
          <div className="card__property-item">
            <div>cost</div>
            <div>
              {Number.isInteger(productPrice) ? productPrice + "$" : "free"}
            </div>
          </div>
          <div className="card__property-item">
            <div>property</div>
            <div>very nice</div>
          </div>
          <div className="card__property-item">
            <div>color</div>
            <div>{imgColor || "red"}</div>
          </div>
        </div>
        <div className="card__info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
          dignissimos odio tempora atque error deleniti, neque illum, totam sit
          labore fugiat modi dolorem eveniet quisquam fugit velit laboriosam
          quibusdam!
        </div>
        <div className="card__btn-wrapper">
          <button
            onClick={() => setState((val) => !val)}
            className={`card__btn ${state ? "buy" : "cancel"}`}
          >
            {state ? "buy" : "cancel"}
          </button>
        </div>
      </div>
    </>
  );
}
