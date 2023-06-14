import { FC } from "react";
import { Navbar, ProductsContainer } from "../components";
import { ProductProps } from "../types/product";

export const HomePage: FC<ProductProps> = (props) => {
	return (
		<>
			<Navbar />
			<ProductsContainer {...props} />
		</>
	);
};
