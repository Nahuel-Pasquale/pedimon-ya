import { products } from "./products.js";

/* 
        <li>
            <div>
                  <img src="./assets/img/balbasaur.png" alt="Balbasaur" />
            </div>
            <span>La tortuga <br /> franlkin</span>
            <span>125$</span>
            <button class="">Comprar</button>
        </li> 
        
*/

const Card = (id, img, name, price, stock) => {
  return `
    <li>
        <div>
          <img src="${img}" />
        </div>
        <span> ${name} </span>
        <span> $ ${price} </span>
        <button data-img="${img}"
                data-name="${name}"
                data-price="${price}"
                data-id="${id}"
                class="${stock !== 0 ? "" : "disabled"} button">Comprar</button>
               <div id='stockMessage${id}' class="outStock ${
    stock > 1 ? "hidden" : ""
  }">
               <strong>${
                 stock == 0 ? "Murio el poke" : stock == 1 ? "Último" : ""
               }</strong></div>

    </li> 
    `;
};

const CartItem = (product) => {
  return `
                    <div class="cart-item">
                        <div class="cart-item-content">
                            <div class="item-img">
                                <img src="${product.img}">
                            </div>
                            <span>${product.name}</span>
                        </div>
                        <div>
                            <button id="minus${
                              product.id
                            }" class="btn btn-primary icon-minus"> - </button>
                            <span id="quantity ${product.id}" class="m-5">
                               ${product.quantity}</span>
                            <button id="plus${
                              product.id
                            }" class="btn btn-primary icon-plus"> + </button>
                        </div>
                        <span>$ ${product.price * product.quantity}</span>
                    </div>
  `;
};

export { Card, CartItem };
