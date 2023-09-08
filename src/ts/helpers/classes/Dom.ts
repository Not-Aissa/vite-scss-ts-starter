import IDom from "../interfaces/IDom";
import ClassListType from "../types/ClassListType";
import Selector from "../types/Selector";

class Dom implements IDom {
  public select<E extends Element>(selector: Selector): E {
    const element = document.querySelector<E>(selector)!;

    return element;
  }

  public selectAll<E extends Element>(selectors: Selector): NodeListOf<E> {
    const elements = document.querySelectorAll<E>(selectors);

    return elements;
  }

  public create<E extends keyof HTMLElementTagNameMap>(element: E, content?: string): HTMLElementTagNameMap[E] {
    const createdElement = document.createElement<E>(element);

    if (!content) return createdElement;

    createdElement.appendChild(document.createTextNode(content));

    return createdElement;
  }

  public classLists(element: Element, type: ClassListType, classNames: string[]): void {
    for (const className of classNames) {
      switch (type) {
        case "add":
          element.classList.add(className);
          break;

        case "remove":
          element.classList.remove(className);
          break;

        default:
          element.classList.add(className);
      }
    }
  }
}

const dom = new Dom();

export default dom;
