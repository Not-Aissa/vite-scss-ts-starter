import Button from "./ts/elements-types/Button";
import Span from "./ts/elements-types/Span";
import dom from "./ts/helpers/classes/Dom";

const counterButton = dom.select<Button>("#counter_btn");
const counterElm = dom.select<Span>("#count");

let count = 0;

window.addEventListener("load", () => {
  updateCount();
});

counterButton.addEventListener("click", increaseCount);

function increaseCount(): number {
  count += 1;

  updateCount();

  return count;
}

function updateCount(): void {
  counterElm.textContent = `${count}`;
}
