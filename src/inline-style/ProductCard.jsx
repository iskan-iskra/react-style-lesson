import { useState } from "react";
import Style from "./cardStyleConst";

export default function ({ imgColor, productPrice }) {
  const [state, setState] = useState(true);

  return (
    <>
      <div style={Style.CardWrapper}>
        <div style={Style.CardTitle}>Product title</div>
        <div style={Style.CardImage(imgColor || "red")}></div>
        <div style={Style.CardPropertyList}>
          <div style={Style.CardPropertyPair}>
            <div>cost</div>
            <div>
              {Number.isInteger(productPrice) ? productPrice + "$" : "free"}
            </div>
          </div>
          <div style={Style.CardPropertyPair}>
            <div>property</div>
            <div>very nice</div>
          </div>
          <div style={Style.CardPropertyPair}>
            <div>color</div>
            <div>{imgColor || "red"}</div>
          </div>
        </div>
        <div style={Style.CardInfo}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
          dignissimos odio tempora atque error deleniti, neque illum, totam sit
          labore fugiat modi dolorem eveniet quisquam fugit velit laboriosam
          quibusdam!
        </div>
        <div style={Style.CardBtnWrapper}>
          <button
            onClick={() => setState((val) => !val)}
            style={state ? Style.CardBtnBuy : Style.CardBtnCancel}
          >
            {state ? "buy" : "cancel"}
          </button>
        </div>
      </div>
    </>
  );
}
