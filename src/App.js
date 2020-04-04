import React, { useState } from 'react';
import NavBar from './components/NavBar'
import Poetry from './components/Poetry'
import Music from './components/Music'
import Eye from './components/Eye'
import { Switch, Route } from 'react-router-dom'
import { IdentityModal } from 'react-netlify-identity-widget'
import { useIdentityContext } from 'react-netlify-identity'
import './App.css';
import 'react-netlify-identity-widget/styles.css'
import "@reach/tabs/styles.css"


function App() {
  const authIdentity = useIdentityContext()

  const [ modalOpen, setModalOpen ] = useState(false)

  const showSecretData = () => <p>Hey {authIdentity.user.user_metadata.full_name} here is some Super Secret Data!</p>

  return (
    <div className="App">
        <NavBar handleAuthClick={() => setModalOpen(true)} user={authIdentity}/>
        <Eye />
        { authIdentity.isLoggedIn ? showSecretData() : null }
        <button onClick={() => console.log(authIdentity)}>Log Auth Info</button>
        <IdentityModal showDialog={modalOpen} onCloseDialog={() => setModalOpen(false)}/>
        <Switch>
          {/* <Route path="/" component={Eye}/> */}
          <Route path="/poetry" component={Poetry} />
          <Route path="/music" component={Music} />
          <Route path="/art"></Route>
        </Switch>
    </div>
  );
}

export default App;
