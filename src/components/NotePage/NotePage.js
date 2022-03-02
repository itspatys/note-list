import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { NotesContext } from '../../context/NotesContext'

import DeleteButton from '../utils/DeleteButton/DeleteButton'
import Note from '../Note/Note'

import './NotePage.scss'

const NotePage = () => {
    const { notes } = useContext(NotesContext)
    const time = useParams()

    const note = notes.filter((note) => {
        return parseInt(note.date.getTime()) === parseInt(time.dateTime)
    })[0]

    return (
        <div className="NotePage">
            <div className="NotePage__nav">
                <div className="NotePage__nav-element">
                    <div className="NotePage__nav-button-wrapper">
                        <button>Home</button>
                    </div>
                </div>
                <div className="NotePage__nav-element">
                    <div className="NotePage__nav-button-wrapper NotePage__nav-element--navigate">
                        <button>Back</button>
                        <button>Forward</button>
                    </div>
                </div>
                <div className="NotePage__nav-element NotePage__nav-element--delete">
                    <DeleteButton 
                        text="Delete note"
                        date={note.date}
                        isNotePage={true}
                    />
                </div>
            </div>
            <div className="NotePage__note">
                <Note 
                    date={note.date}
                    text={note.text}
                    isNotePage={true}
                />
            </div>
        </div>
    )
}

export default NotePage