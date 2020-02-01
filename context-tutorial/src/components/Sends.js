import React, { Component } from "react";
import { SampleConsumer } from "../contexts/sample";

class Sends extends Component {
  state = {
    value: "",
    name: "",
    arrays: [],
  };

  componentDidMount() {
    // :: 초기 값 설정
    this.setState({
      value: this.props.value,
      name: this.props.name,
      arrays: this.props.arrays,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // :: props로 받은 setValue 호출
    this.props.setValue(this.state.value);
    this.props.setName(this.state.name);
    this.props.setArrays(this.state.arrays);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="arrays"
          value={this.state.arrays}
          onChange={this.handleChange}
        />
        <button type="submit">설정</button>
      </form>
    );
  }
}

// :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
const SendsContainer = () => (
  <SampleConsumer>
    {({ state, actions }) => (
      <Sends
        value={state.value}
        name={state.name}
        arrays={state.arrays}
        setValue={actions.setValue}
        setName={actions.setName}
        setArrays={actions.setArrays}
      />
    )}
  </SampleConsumer>
);

// :: Sends 대신에 SendsContainer 를 내보내줌
export default SendsContainer;
