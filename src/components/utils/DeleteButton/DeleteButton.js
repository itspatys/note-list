import { useContext } from "react"
import { NotesContext } from "../../../context/NotesContext"

import "./DeleteButton.scss"

const WarningButton = ({ text, date }) => {
    const { setNotes } = useContext(NotesContext)

    const handleDelete = () => {
        setNotes((oldNotes) => {
            return oldNotes.filter((note) => {
                return note.date.getTime() !== date.getTime()
            })
        })
    }

    return (
        <button className="DeleteButton"
            onClick={handleDelete}
        >
            {text}
        </button>
    )
}

export default WarningButton