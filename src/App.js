import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar'
import {Home} from './components/Pages/Home'
import {Services} from './components/Pages/Services'
import {Products} from './components/Pages/Products'
import {SingUp} from './components/Pages/SingUp'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SingUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
