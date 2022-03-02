import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
import Wrapper from "./components/Wrapper/Wrapper"
import NoteForm from "./components/NoteForm/NoteForm"

const App = () => {
	return (
		<div className="App">
			<Header />
			<Wrapper>
				<Routes>
					<Route path="/" element={
						<>
							<NoteForm />
						</>
					}></Route>
				</Routes>
			</Wrapper>
		</div>
);
}

export default App;
