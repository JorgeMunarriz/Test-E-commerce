import { v4 as uuidv4 } from "uuid";

import img_1 from '../img/img_1.jpeg'
import img_2 from '../img/img_2.jpeg'
import img_3 from '../img/img_3.jpeg'
import img_4 from '../img/img_4.jpeg'
import img_5 from '../img/img_5.jpeg'
import img_6 from '../img/img_6.jpeg'
import img_7 from '../img/img_7.jpeg'

const id1 = uuidv4();
const id2 = uuidv4()
const id3 = uuidv4()
const id4 = uuidv4()
const id5 = uuidv4()
const id6 = uuidv4()
const id7 = uuidv4()


const products = [
  {
    prodId: id1,
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1
  },
  {
    prodId: id2,
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2
  },
  {
    prodId: id3,
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3
  },
  {
    prodId: id4,
    title: "Nike Zoom",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 130,
    img: img_4
  },
  {
    prodId: id5,
    title: "nike Jordan",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 200,
    img: img_5
  },
  {
    prodId: id6,
    title: "Adidas Vs Pace",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 90,
    img: img_6
  },
  {
    prodId: id7,
    title: "Mustang Joggo",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 55,
    img: img_7
  }
];

export default products;