// method to get client from contentful API
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "fe6mrnbl80h6",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "TCmAoX_Uw8WH8Cl3Lbaaz747F2nobvu_hoCQGogSuZw",
});

const productsDOM = document.querySelector(".product-container");
// const productsInformation = document.querySelector(".product-information");

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
       <img id=${product.id}
          class="product"
          src=${product.image}
          alt=${product.title}
        />
      `;
    });

    productsDOM.innerHTML = result;
  }
}

// // class Info {
// //   displayProducts(products) {
// //     let result = "";
// //     products.forEach((product) => {
// //       result += `
// //        <h2 class="product-name information-el">${product.title}</h2>
// //         <h3 class="author information-el">By Jonas Heart</h3>
// //         <h3 class="value information-el">For: R$ ${product.price}</h3>
// //         <p class="description information-el">
// //           ${product.description}
// //         </p>
// //       `;
// //     });

// //     productsInformation.innerHTML = result;
// //   }
// // }

// class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  products.getProducts().then((products) => ui.displayProducts(products));
});

// document.addEventListener("DOMContentLoaded", () => {
//   const info = new Info();
//   const products = new Products();
//   products.getProducts().then((products) => info.displayProducts(products));
// });

// require('./bundle.js')