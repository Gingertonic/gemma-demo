import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function NavBar({ location, handleAuthClick, user }) {

    const checkForActive = target => location.pathname === target ? "active" : "inactive"

    return (
        <div id="navbar">
            <Link className={checkForActive("/")} to="/">Home</Link>
            <Link className={checkForActive("/poetry")} to="/poetry">Poetry</Link>
            <Link className={checkForActive("/music")} to="/music">Music</Link>
            <Link className={checkForActive("/art")} to="/art">Visuals</Link>
            <Link className="active" to="#" onClick={handleAuthClick}>{ user.isLoggedIn ? 'Logout' : 'Login'}</Link>
        </div>
    )
}

export default withRouter(NavBar)