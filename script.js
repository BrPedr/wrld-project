const newSelector = (selector) => {
  return document.createElement(selector);
};

const style = (selector, ...styles) => {
  return (selector.style.cssText = styles);
};

const appendSelector = (selector, newChild) => {
  const getSelector = document.querySelector(selector);
  getSelector.addEventListener("click", () => {
  getSelector.appendChild(newChild);  
  });
};

const constructNewElement = (el, elList, selector, attribute, classOfItems) => {
  for (value in elList) {
    const selectors = el.appendChild(newSelector(selector));
    const text = document.createTextNode(elList[value]);
    const appendText = selectors.appendChild(text);
    const attributes = selectors.setAttribute(
      attribute,
      `${elList[value]}.html`
    );
    const classOfNavItems = selectors.classList.add(classOfItems);
  }
  return el;
};

const burguerMenu = newSelector("div");

style(
  burguerMenu,
  "position:absolute; box-shadow: 2px 2px 5px grey; border: outset 0 1px 1px; top: 55px; left: 15px; height:250px; width:120px; z-index: 10; background-color: white;"
);

const nav = newSelector("div");

constructNewElement(
  nav,
  ["join", "about", "artists", "contact", "shop"],
  "a",
  "href",
  "menuBurguer"
);

burguerMenu.appendChild(nav);
nav.classList.add("navBurguerMenu")

appendSelector(".toggleMenuContainer", burguerMenu);

function menuClose() {
  const selector = document.querySelector(".toggleMenuContainer");
  selector.addEventListener("click", () => {
    burguerMenu.classList.toggle("menuBurguerClosed");
  });
}

menuClose();