import { createContext } from "react"
import useSesstionStorage from "../hooks/useSessionStorage"

const NotesContext = createContext()

const NotesProvider = ({ children }) => {

    const [notes, setNotes] = useSesstionStorage("notes", [])

    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider }