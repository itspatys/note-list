import { useContext, useState } from "react"
import { NotesContext } from "../../context/NotesContext"

import "./NoteForm.scss"

const NoteForm = () => {

    const { setNotes } = useContext(NotesContext)
    const [text, setText] = useState("")

    const handleNoteAdd = (e) => {
        e.preventDefault()
        setNotes((oldNotes) => ([{text: text, date: new Date()}, ...oldNotes]))
        setText("")
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="NoteForm">
            <h2
                className="NoteForm__header"
            >
                Note
            </h2>
            <form className="NoteForm__form">
                <div className="NoteForm__textarea-wrapper">
                    <textarea 
                        placeholder="Note text"
                        className="NoteForm__textarea"
                        onChange={handleTextChange}
                        value={text}
                    ></textarea>
                </div>
                <div className="NoteForm__button-wrapper">
                    <button
                        onClick={handleNoteAdd}
                    >Add note</button>
                </div>
            </form>
        </div>
    )
}

export default NoteForm