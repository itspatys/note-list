import { useState, useEffect } from "react"

const useSesstionStorage = (name, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            const sessionStorageValue = JSON.parse(sessionStorage.getItem(name))
            if(sessionStorageValue === null) throw new Error("Session Storage item undefined.")
            return sessionStorageValue.map((note) => {
                return {
                    text: note.text,
                    date: new Date(note.date)
                }
            })
        } catch {
            sessionStorage.setItem(name, JSON.stringify(initialValue))
            return initialValue
        }
    })

    useEffect(() => {
        sessionStorage.setItem(name, JSON.stringify(state))
    })

    return [state, setState]
}

export default useSesstionStorage