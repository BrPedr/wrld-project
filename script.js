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
  "position:absolute; border: outset 3px; top: 0; height:200px; width:100px; z-index: 10; background-color:white; border-radius: 5%"
);

const nav = newSelector("div");

style(
  nav,
  "font-weight: 500; text-transform: uppercase; display: flex; flex-direction: column; align-items: baseline; margin-top: 20px;"
);

constructNewElement(
  nav,
  ["join", "about", "artists", "contact"],
  "a",
  "href",
  "menuBurguer"
);

burguerMenu.appendChild(nav);

appendSelector(".toggleMenuContainer", burguerMenu);
