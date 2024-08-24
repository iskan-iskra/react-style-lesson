import { useState } from "react";
import {
  CardBtn,
  CardBtnWrapper,
  CardImage,
  CardInfo,
  CardPropertyList,
  CardPropertyPair,
  CardTitle,
  CardWrapper,
} from "./ProductCardComponents";

export default function ({ imgColor, productPrice }) {
  const [state, setState] = useState(true);

  return (
    <>
      <CardWrapper>
        <CardTitle>Product title</CardTitle>
        <CardImage componentColor={imgColor || "red"} />
        <CardPropertyList>
          <CardPropertyPair>
            <div>cost</div>
            <div>
              {Number.isInteger(productPrice) ? productPrice + "$" : "free"}
            </div>
          </CardPropertyPair>
          <CardPropertyPair>
            <div>property</div>
            <div>very nice</div>
          </CardPropertyPair>
          <CardPropertyPair>
            <div>color</div>
            <div>{imgColor || "red"}</div>
          </CardPropertyPair>
        </CardPropertyList>
        <CardInfo>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
          dignissimos odio tempora atque error deleniti, neque illum, totam sit
          labore fugiat modi dolorem eveniet quisquam fugit velit laboriosam
          quibusdam!
        </CardInfo>
        <CardBtnWrapper>
          <CardBtn
            onClick={() => setState((val) => !val)}
            componentType={state ? "buy" : "cancel"}
          >
            {state ? "buy" : "cancel"}
          </CardBtn>
        </CardBtnWrapper>
      </CardWrapper>
    </>
  );
}
