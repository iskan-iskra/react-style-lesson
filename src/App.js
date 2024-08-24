import {
  CommonFileImportRectangle,
  CommonFileProductCard,
} from "./common-file-import";
import {
  InlineComponentProductCard,
  InlineComponentRectangle,
} from "./inline-style";
import {
  ModuleStyleRectangle,
  ModuleStyleProductCard,
} from "./module-style-file";
import {
  StyledComponentRectangle,
  StyledComponentProductCard,
} from "./styled-components";

function App() {
  return (
    <>
      <main>
        <h2>inline style</h2>
        <div className="wrapper">
          <InlineComponentRectangle />
          <InlineComponentRectangle />
          <InlineComponentRectangle />
        </div>
        <hr />
        <div className="wrapper">
          <InlineComponentProductCard imgColor={"red"} productPrice={1000} />
          <InlineComponentProductCard imgColor={"blue"} productPrice={200} />
          <InlineComponentProductCard imgColor={"green"} productPrice={1500} />
        </div>
        <hr />
        <h2>CSS/SCSS files</h2>
        <div className="wrapper">
          <CommonFileImportRectangle />
          <CommonFileImportRectangle />
          <CommonFileImportRectangle />
        </div>
        <hr />
        <div className="wrapper">
          <CommonFileProductCard imgColor={"blue"} productPrice={1500} />
          <CommonFileProductCard imgColor={"green"} productPrice={1000} />
          <CommonFileProductCard imgColor={"red"} productPrice={200} />
        </div>
        <hr />
        <h2>module CSS/SCSS files</h2>
        <div className="wrapper">
          <ModuleStyleRectangle />
          <ModuleStyleRectangle />
          <ModuleStyleRectangle />
        </div>
        <hr />
        <div className="wrapper">
          <ModuleStyleProductCard imgColor={"green"} productPrice={200} />
          <ModuleStyleProductCard imgColor={"red"} productPrice={1500} />
          <ModuleStyleProductCard imgColor={"blue"} productPrice={1000} />
        </div>
        <hr />
        <h2>Styled Components</h2>
        <div className="wrapper">
          <StyledComponentRectangle />
          <StyledComponentRectangle />
          <StyledComponentRectangle />
        </div>
        <hr />
        <div className="wrapper">
          <StyledComponentProductCard imgColor={"red"} productPrice={1000} />
          <StyledComponentProductCard imgColor={"blue"} productPrice={200} />
          <StyledComponentProductCard imgColor={"green"} productPrice={1500} />
        </div>
      </main>
    </>
  );
}

export default App;
