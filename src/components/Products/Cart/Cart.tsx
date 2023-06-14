import { FC, useEffect } from "react";
import { ProductProps } from "../../../types/product";

import "./cart.styles.css";
import products from "../../../assets/db/db";

export const Cart: FC<ProductProps> = () => {
	// lógica para recuperar del localStorage
	const ShopCart = ()=>{
		const productsShopCart = localStorage.getItem("purchase")
		return productsShopCart;
	}
	

	useEffect(() => {
		// lógica para guardar en localStorage porque también podemos añadir productos al carrito desde aquí
	}, []);

	return (
		<>
			<div className="side-cart">
				<div className="cart-header">
					<h2>My Cart</h2>
				</div>
				<div className="cart-items" id="productList">
					{/* Cart items go here */}
					<p>Your products</p>
				</div>
				<div className="cart-footer">
					<p>Total: </p>
				</div>
				<button className="checkout-button">Checkout</button>
			</div>
		</>
	);
};
