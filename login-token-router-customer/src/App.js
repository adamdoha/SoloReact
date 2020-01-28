import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Owner, Customer, Visitor } from './pages';
import HeaderLogin from './headers/HeaderLogin';
import './App.css';
// import HeaderVisitor from './headers/HeaderVisitor';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <HeaderLogin></HeaderLogin>
          <Route path='/' component={Visitor}/>
          <Route path='/Customer' component={Customer}/>
          <Route path='/Owner' component={Owner}/>
        </div>
      </Router>
    );
  }
}

export default App;
