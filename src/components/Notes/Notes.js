import { useContext } from "react"
import { NotesContext } from "../../context/NotesContext"

import Note from "./../Note/Note"

import "./Notes.scss"

const Notes = () => {
    const { notes } = useContext(NotesContext)

    return (
        <div className="Notes">
            <div className="Notes__header-wrapper">
                <h1>{notes.length ? "Latest notes" : "No notes avaiable"}</h1>
            </div>
            <div className="Notes__notes">
                {
                    console.log(notes)
                }
                {
                    notes.map((note) => {
                        return (
                            <Note
                                text={note.text}
                                date={note.date}
                                key={note.date.getTime()}
                                isNotePage={false}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Notes