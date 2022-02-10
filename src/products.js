/*            <li>
              <div>
                <img src="./assets/img/balbasaur.png" alt="Balbasaur" />
              </div>
              <span
                >La tortuga <br />
                franlkin</span
              >
              <span>125$</span>
              <button>Comprar</button>
              </li>
*/

let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    img: "./assets/img/squirtle.png",
    name: "Squirtle",
    price: 700,
    stock: 1,
  },
  {
    id: 2,
    img: "./assets/img/squirtle.png",
    name: "Bulbasaur",
    price: 800,
    stock: 0,
  },
  {
    id: 3,
    img: "./assets/img/squirtle.png",
    name: "Piplup",
    price: 500,
    stock: 5,
  },
  {
    id: 4,
    img: "./assets/img/squirtle.png",
    name: "Squirtle PREMIUM",
    price: 1000,
    stock: 5,
  },
  {
    id: 5,
    img: "./assets/img/squirtle.png",
    name: "Bulba PREMIUM",
    price: 1000,
    stock: 5,
  },
  {
    id: 6,
    img: "./assets/img/squirtle.png",
    name: "Piplup PREMIUM",
    price: 1000,
    stock: 0,
  },
];

localStorage.setItem("products", JSON.stringify(products));

export { products };
