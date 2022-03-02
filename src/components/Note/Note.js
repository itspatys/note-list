import { Link } from "react-router-dom"

import "./Note.scss"

import DeleteButton from "../utils/DeleteButton/DeleteButton"

const Note = ({ date, text, isNotePage }) => {

    return (
        <div className={isNotePage ? "Note Note--notepage" : "Note"}>
            <div className="Note__grid-element--text">
                <div className="Note__text">{text}</div>
            </div>
            <div className="Note__grid-element--button">
                <div className="Note__button-wrapper">
                    {!isNotePage ?
                        <DeleteButton 
                            text="Delete note"
                            date={date}
                        />
                    : null }
                </div>
                </div>
            <div className="Note__grid-element--date">
                <div className={isNotePage ? "Note__date-wrapper--notepage" : "Note__date-wrapper"}>
                    <Link to={`/note/${date.getTime()}`}>
                        {date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1) }/{date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}/{date.getFullYear()}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Note