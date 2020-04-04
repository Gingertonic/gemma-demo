import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'


export default function Poetry() {
    const authIdentity = useIdentityContext()

    const [ word, setWord ] = useState("")
    const [ load, setLoading ] = useState(false)
    const [ colorSelection, setColorSelection ] = useState("#ff0011")

    const updateUserColorPref = () => {
        console.log('updating')
        setLoading(true)
        authIdentity.updateUser({ data: {color: colorSelection}})
            .then(r => setLoading(false))
    }

    const getInspiration = () => {
        fetch('/api/inspire-me')
            .then(r => r.json())
            .then(data => setWord(data.inspiration))
    }

    return (
        <div>
            <hr/>
            <button onClick={getInspiration}>Click Me!</button>
            <p>{word}</p>
             <input type="color" onChange={e => setColorSelection(e.target.value)}/>
             <button onClick={updateUserColorPref}>Store color preference</button>   
             <div style={{ backgroundColor: authIdentity.user.user_metadata.color, padding: '3em'}}>My fave color!</div>
            <hr/>
        </div>
    )
}
