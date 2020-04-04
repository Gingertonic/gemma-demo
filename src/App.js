import React, { useState } from 'react';
import NavBar from './components/NavBar'
import Poetry from './components/Poetry'
import Music from './components/Music'
import Eye from './components/Eye'
import Secrets from './components/Secrets'
import AlertBanner from './components/AlertBanner'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IdentityModal } from 'react-netlify-identity-widget'
import { useIdentityContext } from 'react-netlify-identity'
import './App.css';
import 'react-netlify-identity-widget/styles.css'
import "@reach/tabs/styles.css"


function App() {
  const authIdentity = useIdentityContext()

  const [ modalOpen, setModalOpen ] = useState(false)
  const [ bannerOpen, setBannerOpen ] = useState(false)

  const doTheDangerousThing = () => {
    if (authIdentity.isLoggedIn) {
      authIdentity.authedFetch.get('/api/dangerous-activity')
      .then(console.log)
    } else { triggerBanner() }
  }

  const showSecretData = () => <p>A silly change! Hey {authIdentity.user.user_metadata.full_name} here is some Super Secret Data!</p>
  
  const PrivateRoute = ({ component, ...options }) => {
    if (authIdentity.isLoggedIn) {
      return <Route {...options} component={component}/>
    }
    triggerBanner()
    return <Redirect to="/" />
  }

  const triggerBanner = () => {
     setBannerOpen(true)
    setTimeout(() => {
      setBannerOpen(false)
    }, 3000);
  }
  
  return (
    <div className="App">
        <NavBar handleAuthClick={() => setModalOpen(true)} user={authIdentity}/>
        <Eye />
        <AlertBanner open={bannerOpen}/>
        { authIdentity.isLoggedIn ? showSecretData() : null }
        <button onClick={() => console.log(authIdentity)}>Log Auth Info</button>
        <IdentityModal showDialog={modalOpen} onCloseDialog={() => setModalOpen(false)}/>
        <Switch>
          {/* <Route path="/" component={Eye}/> */}
          <PrivateRoute path="/poetry" component={Poetry} />
          <Route path="/music" component={Music} />
          <Route path="/art"></Route>
          <PrivateRoute path="/secret-area" component={Secrets}/>
        </Switch>
        <button onClick={doTheDangerousThing}>DO NOT TOUCH</button>
    </div>
  );
}

export default App;
