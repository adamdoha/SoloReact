import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderVisitor from '../headers/HeaderVisitor'
import { Main, Login, Signup } from '../tabs';

class Customer extends Component{
    render(){
      return (
        <Router>
          <div className="Customer">
            <HeaderVisitor></HeaderVisitor>
            <Route exact path='/' component={Main}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Signup' component={Signup}/>
          </div>
        </Router>
      );
    }
  }
  
  export default Customer;
  