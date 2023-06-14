import { FC, useEffect, useState } from "react";
import CounterApp from "../Counter/CounterApp";
import { ProductProps } from "../../../types/product";
import { ButtonAction } from "../../../types/buttons";
import products from "../../../assets/db/db";
import "./products.styles.css";

const ProductsContainer: FC<ProductProps | ButtonAction> = (props) => {
  
  const [counter, setCounter] = useState(0);
  const [purchase, setPurchase] = useState(String);

  function choosePurchase( title: string, price: number) {
    setPurchase(` ${title} - ${price}€`);
    console.log(purchase);
  }

  const increaseValue = (): void => {
    console.log(counter);
    setCounter((prevState: number) => prevState + 1);
  };

  // const counter = "lo que el contador de cada producto diga";

  useEffect(() => {
    if (purchase !== null) {
      localStorage.setItem("purchase", JSON.stringify(purchase));
    }
  }, [purchase]);

  useEffect(() => {
    const savedPurchase = localStorage.getItem("purchase");
    if (savedPurchase) {
      setPurchase(JSON.parse(savedPurchase));
      console.log(savedPurchase);
    }
  }, []);
  

  
  

  const cartProductsList = () => {
    const productListDiv = document.querySelector("#productList") as HTMLDivElement;
    const productUl = document.createElement("ul");
    const productLi = document.createElement("li");
    const productTitle = document.createElement("h3");
    const productBtn = document.createElement("button");
    productUl.setAttribute("class", "list-group-item");
    productLi.setAttribute("class", "list-item")
    productTitle.textContent = purchase;
    productBtn.setAttribute("class", "btn btn-danger btn-xs");
    productBtn.setAttribute("type", "button");
    productBtn.textContent= "delete"

    productListDiv.appendChild(productUl);
    productUl.appendChild(productLi);
    productLi.appendChild(productTitle);
    productLi.appendChild(productBtn)
  };
  
  return (
    <div className="products">
      {products.map(({ prodId, img, title, price, description }) => (
        <div className="card" key={prodId}>
          <div className="container">
            <div className="card">
              <img src={img} alt="" />
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4>{title} {price}€</h4>
                    <h3></h3>
                  </div>
                  <div className="view-btn">
                    <a href="/">View Details</a>
                  </div>
                </div>
                <hr />
                <p>{description}</p>
                <div className="btn-group">
                  <div className="btn-xs">
                    <button
                      type="button" className="btn btn-success"
                      onClick={() => {
                        increaseValue();
                        choosePurchase( title, price);
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
