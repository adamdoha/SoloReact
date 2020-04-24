import React from "react";
import ImageFilter from "./ImageFilter";
import FilterContext, { Storage, FilterConsumer } from "../../Storage";
const NONE = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

const Adjust = class extends React.Component {
  constructor(props) {
    super(props);
    //values=this.props.values
    const {values} = this.props;
    const labels = [
      "Red to Red",
      "Green to Red",
      "Blue to Red",
      "Alpha to Red",
      "Add to Red",
      "Red to Green",
      "Green to Green",
      "Blue to Green",
      "Alpha to Green",
      "Add to Green",
      "Red to Blue",
      "Green to Blue",
      "Blue to Blue",
      "Alpha to Blue",
      "Add to Blue",
      "Red to Alpha",
      "Green to Alpha",
      "Blue to Alpha",
      "Alpha to Alpha",
      "Add to Alpha",
    ];

    this.init = this.init.bind(this);
  }

  handleChange(index, value) {
    const { values } = this.state;

    const newValues = [...values];
    newValues[index] = value;
    this.setState({
      values: newValues,
      filter: newValues,
    });
  }

  init() {
    this.setState({
      values: NONE,
      filter: NONE,
      applyFilter: true,
      key: new Date().getTime(),
    });
  }

  renderSliders() {
    const { values, labels } = this.state;
    this.props.store.
    return values.map((value, index) => {
      return (
        <div className="Control" key={index}>
          {labels[index]}: {parseFloat(value).toFixed(2)}
          <input
            className="Control-input"
            type="range"
            min={-1}
            max={2}
            step={0.01}
            value={value}
            onChange={(e) => this.handleChange(index, e.target.value)}
          />
        </div>
      );
    });
  }

  render() {
    const { values, filter, applyFilter, key } = this.state;

    return (
      <>
        <div className="Controls">{this.renderSliders()}</div>
      </>
    );
  }
};

export default Adjust;
