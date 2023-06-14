import { FC, useEffect, useState } from "react";
import CounterApp from "../Counter/CounterApp";
import { ProductProps } from "../../../types/product";
import { ButtonAction } from "../../../types/buttons";
import products from "../../../assets/db/db";
import "./products.styles.css";

const ProductsContainer: FC<ProductProps | ButtonAction> = (props) => {
  const { id, title, description, price, img } = products;
  const [counter, setCounter] = useState(1);
  const [purchase, setPurchase] = useState(null);

  function choosePurchase(title: string, price: number) {
    setPurchase(`${title} - ${price}€`);
    console.log(purchase);
  }

  const increaseValue = (): void => {
    console.log(counter);
    setCounter((prevState: number) => prevState + 1);
  };

  // const counter = "lo que el contador de cada producto diga";

  useEffect(() => {
    if (purchase !== null) {
      localStorage.setItem(purchase, counter.toString());
    }

    // lógica para guardar en localStorage
  }, [counter, purchase]);
  useEffect(() => {
    const savedPurchase = localStorage.getItem("purchase");
    if (savedPurchase) {
      setPurchase(JSON.parse(savedPurchase));
    }
  }, []);

  const cartProductsList = () => {
    const productListDiv = document.querySelector("#productList") as HTMLDivElement;
    const productUl = document.createElement("ul");
    const productLi = document.createElement("li");
    const productBtn = document.createElement("button");
    productBtn.textContent = purchase;

    productListDiv.appendChild(productUl);
    productUl.appendChild(productLi);
    productLi.appendChild(productBtn);
  };

  return (
    <div className="products">
      {products.map(({ id, img, title, price, description }) => (
        <div className="m-2 p-2" key={id}>
          <div className="container">
            <div className="card">
              <img src={img} alt="" />
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4>{title}</h4>
                    <h3>{price}€</h3>
                  </div>
                  <div className="view-btn">
                    <a href="/">View Details</a>
                  </div>
                </div>
                <hr />
                <p>{description}</p>
                <div className="btn-group">
                  <div className="btn">
                    <button
                      type="button"
                      onClick={() => {
                        increaseValue();
                        choosePurchase(title, price);
                        cartProductsList();
                      }}>
                      Buy Now
                    </button>
                  </div>
                  <CounterApp {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
