import nike from "../assets/images/nike.png";
import puma from "../assets/images/puma.png";
import adidas from "../assets/images/adidas.png";
import newbalance from "../assets/images/newbalance.png";
const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 4999,
    stock: true,
    image: nike,
  },
  {
    id: 2,
    name: "Puma RS-X",
    price: 3999,
    stock: false,
    image: puma,
  },
  {
    id: 3,
    name: "Adidas Superstar",
    price: 5999,
    stock: true,
    image: adidas,
  },
  {
    id: 4,
    name: "New Balance 574",
    price: 6999,
    stock: false,
    image: newbalance,
  },
];
export default products;