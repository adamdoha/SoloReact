import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, Signup } from '../tabs';
import HeaderVisitor from '../headers/HeaderVisitor';

class Visitor extends Component{
    render(){
      return (
        <div className="Visitor">
          <HeaderVisitor></HeaderVisitor>
          {/* exact path!!! 는 정확한 url을 받기 위한 것이다. 명칭이 겹칠 수 있기 때문에 exact path를 써주거나 혹은 이름을 애매하게 하는게 좋다!!! */}
          <Route exact path='/' component={Main}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Signup' component={Signup}/>
        </div>
      );
    }
  }
  
  export default Visitor;
  