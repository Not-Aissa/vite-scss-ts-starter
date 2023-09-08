import ClassListType from "../types/ClassListType";
import Selector from "../types/Selector";

interface IDom {
  select<E extends Element>(selector: Selector): E;
  selectAll<E extends Element>(selectors: Selector): NodeListOf<E>;
  create<E extends keyof HTMLElementTagNameMap>(element: E, content?: string): HTMLElementTagNameMap[E];
  classLists(element: Element, type: ClassListType, classNames: string[]): void;
}

export default IDom;
