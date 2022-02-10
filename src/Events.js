import { Card, CartItem } from "./Cards.js";
import { cart } from "./main.js";
import { products } from "./products.js";

const handleAddProduct = (e) => {
  e.preventDefault();

  if (
    !e.target.classList.contains("button") ||
    e.target.classList.contains("disabled")
  )
    return;
  // const id = e.target.dataset.id;
  const newProduct = {
    id: e.target.dataset.id,
    img: e.target.dataset.img,
    name: e.target.dataset.name,
    price: e.target.dataset.price,
    quantity: 1,
  };
  if (cart.products.some((product) => product.name === newProduct.name)) {
    const prod = cart.products.find(
      (product) => product.name === newProduct.name
    );
    // console.log(prod);
    prod.quantity = Number(prod.quantity) + 1;
    cart.products = cart.products.filter(
      (product) => product.name !== newProduct.name
    );
    cart.products.push(prod);
  } else {
    cart.products.push(newProduct);
  }
  cart.quantity = Number(cart.quantity) + 1;
  cart.total = Number(cart.total) + Number(newProduct.price);
  localStorage.setItem("cart", JSON.stringify(cart));
  handleProductStock(newProduct, newProduct.id, e.target);
};

const handleProductStock = (product, id, button) => {
  let prod = products.find((p) => p.name === product.name);
  console.log(prod);
  prod.stock = Number(prod.stock) - 1;
  // prod.stock == 1
  //   ? `<div class="outStock"><strong>ULTIMO!</strong></div>`
  //   : prod.stock == 0
  //   ? `<div class="outStock"><strong>sin stock. voló</strong></div>`
  //   : "";
  // console.log(prod);
  let newProducts = products.filter((p) => p.name !== product.name);
  newProducts.push(prod);
  // console.log(prod);
  localStorage.setItem("products", JSON.stringify(products));
  const stockMessage = document.querySelector(`#stockMessage${id}`);
  if (prod.stock == 1) {
    stockMessage.classList.remove("hidden");
    stockMessage.firstElementChild.textContent = "Ultimo";
  } else if (prod.stock == 0) {
    stockMessage.firstElementChild.textContent = "Murio el poke";
    button.classList.add("disabled");
  }
};

const handleMinusButton = (e) => {
  e.preventDefault();
  if (
    !e.target.classList.contains("icon-minus") &&
    !e.target.classList.contains("icon-plus")
  )
    return;
  // console.log(e.target);
  if (e.target.classList.contains("icon-minus")) {
    let prod = products.find((p) => p.name === product.name);
  }

  // MOSTRAR EL MENSAJE EN LAS CARDS DE PRODUCTOS

  // const stockMessage = document.querySelector(`#stockMessage${id}`);
  // if (prod.stock == 1) {
  //   stockMessage.classList.remove("hidden");
  //   stockMessage.firstElementChild.textContent = "Ultimo";
  // } else if (prod.stock == 0) {
  //   stockMessage.firstElementChild.textContent = "Murio el poke";
  //   button.classList.add("disabled");
  // }
};

// localStorage.setItem("products", JSON.stringify(products));

export { handleAddProduct, handleMinusButton };
