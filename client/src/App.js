import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import imageSrc from './ranked-positions/Position_Silver-Bot.png'

import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import TEST from './pages/test'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <SearchPage />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
