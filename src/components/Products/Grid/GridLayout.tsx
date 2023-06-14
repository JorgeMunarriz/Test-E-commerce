import { FC, PropsWithChildren } from "react";
import "./grid.styles.css";

const GridLayout: FC<PropsWithChildren> = ({ children }) => {
	return <div className="wrapper">{children}</div>;
};

export default GridLayout;
