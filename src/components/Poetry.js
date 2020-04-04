import React, { useState } from 'react'


export default function Poetry() {
    const [ word, setWord ] = useState("")

    const getInspiration = () => {
        fetch('/api/inspire-me')
            .then(r => r.json())
            .then(data => setWord(data.inspiration))
    }

    return (
        <div>
            <button onClick={getInspiration}>Click Me!</button>
            <p>{word}</p>
        </div>
    )
}
