import { createContext, useState } from "react"
import useSesstionStorage from "../hooks/useSessionStorage"

const NotesContext = createContext()

const NotesProvider = ({ children }) => {

    // const [notes, setNotes] = useState([])
    const [notes, setNotes] = useSesstionStorage("notes", [])
    console.log(notes)

    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    )
}

export { NotesContext, NotesProvider }