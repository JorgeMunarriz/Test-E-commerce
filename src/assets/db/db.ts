import { v4 as uuidv4 } from "uuid";

import img_1 from '../img/img_1.jpeg'
import img_2 from '../img/img_2.jpeg'
import img_3 from '../img/img_3.jpeg'

const id = uuidv4();

const products = [
  {
    id: id,
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1
  },
  {
    id: id,
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2
  },
  {
    id: id,
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3
  },
  {
    id: id,
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1
  },
  {
    id: id,
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2
  },
  {
    id: id,
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3
  },
  {
    id: id,
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1
  },
  {
    id: id,
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2
  },
  {
    id: id,
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3
  }
];

export default products;