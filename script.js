// method to get client from contentful API
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "fe6mrnbl80h6",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "TCmAoX_Uw8WH8Cl3Lbaaz747F2nobvu_hoCQGogSuZw",
});

const productsDOM = document.querySelector(".grid-of-products");

// let cart = [];

class Products {
  async getProducts() {
    try {
      let contentful = await client.getEntries({
        content_type: "photography",
      });
      // console.log(contentful);

      // let result = await fetch("products.json");
      // let data = await result.json();

      let products = contentful.items;
      products = products.map((item) => {
        const { title, price, description } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, description, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
       <div id=${product.id}
          class="products product-wraper"
          style="
            background: url(${product.image}) no-repeat center;
            background-size: cover;
          "
        ></div>
      `;
    });

    productsDOM.innerHTML = result;
  }
}

class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  products.getProducts().then((products) => ui.displayProducts(products));
});

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
nav.classList.add("navBurguerMenu");

appendSelector(".toggleMenuContainer", burguerMenu);

function menuClose() {
  const selector = document.querySelector(".toggleMenuContainer");
  selector.addEventListener("click", () => {
    burguerMenu.classList.toggle("menuBurguerClosed");
  });
}

menuClose();

// const img = document.querySelector(".grid-of-products")
// img.addEventListener("click", () => {
//   const url = img.childNodes;
// });