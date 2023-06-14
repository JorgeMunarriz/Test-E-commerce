import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FC } from "react";
import { ProductProps } from "../types/product";
import { BlogPage } from "../pages/BlogPage";

export const RouterPaths: FC<ProductProps> = (props) => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage {...props} />} />
					<Route path="/blog" element={<BlogPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
