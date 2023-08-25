import { PrimitiveCheckbox } from "./PrimitiveCheckbox";
import * as PrimitiveAccordion from "./PrimitiveAccordion";

function App() {
  return (
    <div>
      <PrimitiveCheckbox id="test" label="test" />
      <PrimitiveAccordion.Root>
        {Array.from(new Array(3)).map((_, index) => {
          return (
            <PrimitiveAccordion.Item
              id={"item" + index}
              label={"Panel " + index}
            >
              <form action="#">
                <p>Panel {index}</p>
                <label htmlFor={"internal-input" + index}>Internal input</label>
                <input id={"internal-input" + index} type="text" />
                <button type="button">Button</button>
                <button type="submit">Submit</button>
              </form>
            </PrimitiveAccordion.Item>
          );
        })}
      </PrimitiveAccordion.Root>
    </div>
  );
}

export default App;
