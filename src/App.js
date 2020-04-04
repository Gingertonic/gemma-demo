import React from 'react';
import NavBar from './components/NavBar'
import Poetry from './components/Poetry'
import Music from './components/Music'
import Eye from './components/Eye'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Eye />
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
