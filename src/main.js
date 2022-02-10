import { Card, CartItem } from "./Cards.js";
import { products } from "./products.js";
import { handleAddProduct, handleMinusButton } from "./Events.js";

const productsList = document.querySelector(".productsList");
const cartWrapper = document.querySelector(".cart-wrapper");

let cart = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  quantity: 0,
  total: 0,
};
localStorage.setItem("cart", JSON.stringify(cart));

const renderizeCards = () => {
  productsList.innerHTML = `
    
        ${products
          .map((product) =>
            Card(
              product.id,
              product.img,
              product.name,
              product.price,
              product.stock
            )
          )
          .join("")}

    `;
};

const renderizeCartItems = () => {
  cartWrapper.innerHTML = `

    ${cart.products.map((product) => CartItem(product)).join("")}
  


    <div class="total-items">
    <span> <strong>Total: $ ${cart.total} </strong>  </span>
    </div>
    
    <button class="btn btn-primary finalizar-compra">finalizar compra</button>
  `;
};

const main = () => {
  renderizeCards();
  renderizeCartItems();
  productsList.addEventListener("click", handleAddProduct);
  cartWrapper.addEventListener("click", handleMinusButton);
};

main();

export { cart };
