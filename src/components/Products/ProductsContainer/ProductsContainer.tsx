import { FC } from "react";
import GridLayout from "../Grid/GridLayout";
import ProductCard from "../ProductCard/ProductCard";
import { Cart } from "../Cart";
import { ProductProps } from "../../../types/product";
// import { Link } from "react-router-dom";

export const ProductsContainer: FC<ProductProps> = (props) => {
	return (
		<div className="products__bg">
			<GridLayout>
				{/* <Link to="/blog">Blog</Link> */}
				<ProductCard {...props} />
				<Cart {...props} />
			</GridLayout>
		</div>
	);
};
