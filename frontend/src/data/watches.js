import applewatch from "../assets/images/watches/applewatch.png";
import seiko from "../assets/images/watches/seiko.png";
import casio from "../assets/images/watches/casio.png";
import kennethcole from "../assets/images/watches/kennethcole.png";
const watches = [
  {
    id: 201,
    category : "Watches",
    name: "Apple Watch Series 11",
    price: 45000,
    stock: true,
    image: applewatch,
  },
  {
    id: 202,
    category : "Watches",
    name: "Seiko Sports 5",
    price: 25000,
    stock: false,
    image: seiko,
  },
  {
    id: 203,
    category : "Watches",
    name: "Casio G-Shock",
    price: 20000,
    stock: true,
    image: casio,
  },
  {
    id: 204,
    category : "Watches",
    name: "Kenneth Cole New York",
    price: 15000,
    stock: true,
    image: kennethcole,
  },
];
export default watches;