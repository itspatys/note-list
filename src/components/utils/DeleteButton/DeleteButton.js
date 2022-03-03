import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "../../../context/NotesContext"

import "./DeleteButton.scss"

const WarningButton = ({ text, date, isNotePage }) => {
    const { setNotes } = useContext(NotesContext)
    const navigate = useNavigate()

    const handleDelete = () => {
        if(isNotePage) {
            navigate("/", { replace: true })
        }
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