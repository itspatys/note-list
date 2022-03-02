import Note from "./../Note/Note"

import "./Notes.scss"

const Notes = () => {
    return (
        <div className="Notes">
            <div className="Notes__header-wrapper">
                <h1>Latest notes</h1>
            </div>
            <div className="Notes__notes">
                <Note 
                    text={"test text note example"} 
                    date={new Date()}
                />
            </div>
        </div>
    )
}

export default Notes