import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
import Wrapper from "./components/Wrapper/Wrapper"
import NoteForm from "./components/NoteForm/NoteForm"
import Notes from "./components/Notes/Notes"

const App = () => {
	return (
		<div className="App">
			<Header />
			<Wrapper>
				<Routes>
					<Route path="/" element={
						<>
							<NoteForm />
							<Notes />
						</>
					}></Route>
				</Routes>
			</Wrapper>
		</div>
);
}

export default App;
