import { Routes, Route } from "react-router-dom";

import { NotesProvider } from "./context/NotesContext";

import Header from "./components/Header/Header"
import Wrapper from "./components/Wrapper/Wrapper"
import NoteForm from "./components/NoteForm/NoteForm"
import Notes from "./components/Notes/Notes"
import NotePage from "./components/NotePage/NotePage";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Wrapper>
				<NotesProvider>
					<Routes>
						<Route path="/" element={
							<>
								<NoteForm />
								<Notes />
							</>
						}></Route>
						<Route path="/note/:dateTime" element={<NotePage />} />
					</Routes>
				</NotesProvider>
			</Wrapper>
		</div>
	);
}

export default App;
