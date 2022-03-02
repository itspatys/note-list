import "./Note.scss"

import DeleteButton from "../utils/DeleteButton/DeleteButton"

const Note = ({ date, text, isHome }) => {

    return (
        <div className="Note">
            <div className="Note__grid-element--text">
                <div className="Note__text">{text}</div>
            </div>
            <div className="Note__grid-element--button">
                <div className="Note__button-wrapper">
                    <DeleteButton 
                        text="Delete note"
                        date={date}
                    />
                </div>
                </div>
            <div className="Note__grid-element--date">
                <div className="Note__date-wrapper">
                    {date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1) }/{date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}/{date.getFullYear()}
                </div>
            </div>
        </div>
    )
}

export default Note