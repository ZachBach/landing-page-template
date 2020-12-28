import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
