const CardWrapper = {
  width: "100%",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const CardTitle = {
  fontSize: "24px",
  textAlign: "center",
  fontWeight: "700",
};

const CardImage = (color) => ({
  width: "100%",
  height: "200px",
  backgroundColor: color,
  borderRadius: "8px",
});

const CardPropertyList = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "100%",
};

const CardPropertyPair = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
};

const CardInfo = {
  color: "darkgray",
  fontSize: "10px",
};

const CardBtnWrapper = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
};

const CardBtn = {
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  outline: "none",
};

const CardBtnBuy = {
  ...CardBtn,
  color: "white",
  backgroundColor: "green",
};

const CardBtnCancel = {
  ...CardBtn,
  color: "white",
  backgroundColor: "red",
};

export default {
  CardWrapper,
  CardTitle,
  CardImage,
  CardPropertyList,
  CardPropertyPair,
  CardInfo,
  CardBtnWrapper,
  CardBtnBuy,
  CardBtnCancel,
};
