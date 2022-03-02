import "./NoteForm.scss"

const NoteForm = () => {
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
                    ></textarea>
                </div>
                <div className="NoteForm__button-wrapper">
                    <button>Add note</button>
                </div>
            </form>
        </div>
    )
}

export default NoteForm