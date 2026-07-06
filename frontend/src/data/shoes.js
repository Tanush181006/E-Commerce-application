import nike from "../assets/images/shoes/nike.png";
import puma from "../assets/images/shoes/puma.png";
import adidas from "../assets/images/shoes/adidas.png";
import newbalance from "../assets/images/shoes/newbalance.png";
const shoes = [
  {
    id: 301,
    name: "Nike Air Max",
    price: 5000,
    stock: true,
    image: nike,
  },
  {
    id: 302,
    name: "Puma RS-X",
    price: 4000,
    stock: false,
    image: puma,
  },
  {
    id: 303,
    name: "Adidas Superstar",
    price: 6000,
    stock: true,
    image: adidas,
  },
  {
    id: 304,
    name: "New Balance 574",
    price: 7000,
    stock: true,
    image: newbalance,
  },
];
export default shoes;