import React from 'react'

export default function AlertBanner({ open }) {
    return (
        <div id="alert" className={ open ? 'visible' : 'hidden'}>
            You need to be logged in!
        </div>
    )
}
