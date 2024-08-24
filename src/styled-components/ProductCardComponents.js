import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardTitle = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 700;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: ${(props) => props.componentColor || "red"};
`;

export const CardPropertyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const CardPropertyPair = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  color: darkgray;
  font-size: 10px;
`;

export const CardBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const CardBtnColor = (type) => {
  switch (type) {
    case "buy":
      return "white";
    case "cancel":
      return "white";
    default:
      return "black";
  }
};
const CardBtnBackgroundColor = (type) => {
  switch (type) {
    case "buy":
      return "green";
    case "cancel":
      return "red";
    default:
      return "white";
  }
};

export const CardBtn = styled.div`
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  outline: none;
  color: ${(props) => CardBtnColor(props.componentType)};
  background-color: ${(props) => CardBtnBackgroundColor(props.componentType)};
`;
