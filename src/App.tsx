import "./App.css";
import { RouterPaths } from "./Routes/RouterPaths.routes";

function App(props: any) {
	return (
		<>
			<RouterPaths {...props} />
		</>
	);
}

export default App;
