import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0,
  };

  //SetState는 다음과 같이 사용하는 것을 권장한다.
  //니콜라스 형이 이거 아는 사람 별로 없다 그랬음 가장 좋은 코드래
  Add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  Minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component did Update");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>지금 숫자 : {this.state.count}</h1>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Minus}>Minus</button>
      </div>
    );
  }
}

export default App;
