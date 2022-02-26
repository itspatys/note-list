import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<></>}></Route>
			</Routes>
		</div>
);
}

export default App;
