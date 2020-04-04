import React from 'react'
import { withRouter } from 'react-router-dom'

function Eye({ match, history, location }) {
    return (
        <div id="eye-background">
            <img className={location.pathname !== '/' ? 'faded' : null} src="./images/eye_transparent.png" alt="eye"/>
        </div>
    )
}

export default withRouter(Eye)
