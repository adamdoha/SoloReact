import React, { Component } from "react";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        book: true, //state에 없어도 에러 안남
      });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading...." : "We are ready"}</div>;
  }
}

export default App;
