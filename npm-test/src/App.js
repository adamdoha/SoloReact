import React from "react";
import "./index.scss";
import ImageFilter from "./components/ImageFilter";

const NONE = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
const nightfall = [
  1,
  0.23,
  0.1,
  -0.04,
  0,
  0.12,
  1,
  -0.32,
  0,
  0.25,
  0,
  0.12,
  1,
  0,
  0.1,
  0,
  0,
  0,
  1,
  0.36,
];
const Scared = [
  1,
  -0.42,
  0,
  0,
  0,
  0,
  0.5,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
];

const App = class extends React.Component {
  constructor() {
    super();

    const values = [...NONE];

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

    this.state = {
      values,
      labels,
      filter: values,
      applyFilter: true,
      colorOne: null,
      colorTwo: null,
      key: new Date().getTime(),
    };
    this.init = this.init.bind(this);
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
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

  handleToggleFilter() {
    const { applyFilter } = this.state;

    this.setState({
      applyFilter: !applyFilter,
    });
  }

  init() {
    this.setState({
      values: NONE,
      filter: NONE,
      applyFilter: true,
      colorOne: null,
      colorTwo: null,
      key: new Date().getTime(),
    });
  }

  renderSliders() {
    const { values, labels } = this.state;

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
    const { filter, applyFilter, values, colorOne, colorTwo, key } = this.state;

    return (
      <div className="Content">
        <div className="ImageWrapper">
          <ImageFilter
            image={`./pirim.JPG`}
            key={key}
            // preserveAspectRatio='cover'
            // style={ { width: '100%', height: 300 } }
            filter={applyFilter ? filter : NONE}
            colorOne={colorOne}
            colorTwo={colorTwo}
            onChange={(m) => this.setState({ values: m })}
          />
        </div>
        <div className="Controls">{this.renderSliders()}</div>

        <div>
          <h4>필터</h4>
          <button className="btn btn-sm" onClick={this.init}>
            초기화
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                values: Scared,
                filter: Scared,
                applyFilter: true,
                key: new Date().getTime(),
              })
            }
          >
            귀신이나올꺼같은 필터!!
          </button>

          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                values: nightfall,
                filter: nightfall,
                applyFilter: true,
                key: new Date().getTime(),
              })
            }
          >
            해질녘...이랄까?
          </button>

          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                filter: "invert",
                applyFilter: true,
                key: new Date().getTime(),
              })
            }
          >
            Invert
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                filter: "grayscale",
                applyFilter: true,
                key: new Date().getTime(),
              })
            }
          >
            Grayscale
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                filter: "sepia",
                applyFilter: true,
                key: new Date().getTime(),
              })
            }
          >
            Sepia
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                applyFilter: true,
                filter: "duotone",
                colorOne: [250, 50, 50],
                colorTwo: [20, 20, 100],
                key: new Date().getTime(),
              })
            }
          >
            Duotone (red / blue)
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                applyFilter: true,
                filter: "duotone",
                colorOne: [50, 250, 50],
                colorTwo: [250, 20, 220],
                key: new Date().getTime(),
              })
            }
          >
            Duotone (green / purple)
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                applyFilter: true,
                filter: "duotone",
                colorOne: [40, 250, 250],
                colorTwo: [250, 150, 30],
                key: new Date().getTime(),
              })
            }
          >
            Duotone (light blue/orange)
          </button>
          <button
            className="btn btn-sm"
            onClick={() =>
              this.setState({
                filter: "duotone",
                colorOne: [40, 70, 200],
                colorTwo: [220, 30, 70],
                key: new Date().getTime(),
              })
            }
          >
            Duotone (blue / red)
          </button>
        </div>

        {/* <button className="btn btn-sm" onClick={this.handleToggleFilter}>
          Turn filter {applyFilter ? "off" : "on"}
        </button> */}
        {/* <button
          className="btn btn-sm"
          onClick={() => this.setState({ key: new Date().getTime() })}
        >
          New image
        </button> */}

        <h4>적용된 필터 값</h4>
        {typeof filter === "object" ? (
          <pre>
            필터 Weight = [<br />
            {"  "}
            {values[0]}, {values[1]}, {values[2]}, {values[3]}, {values[4]},
            <br />
            {"  "}
            {values[5]}, {values[6]}, {values[7]}, {values[8]}, {values[9]},
            <br />
            {"  "}
            {values[10]}, {values[11]}, {values[12]}, {values[13]}, {values[14]}
            ,<br />
            {"  "}
            {values[15]}, {values[16]}, {values[17]}, {values[18]}, {values[19]}
            ,<br />
            ];
          </pre>
        ) : (
          <pre>
            const filter = '{filter}';
            <br />
            {filter === "duotone" && (
              <span>
                const colorOne = [{colorOne[0]}, {colorOne[1]}, {colorOne[2]}];
                <br />
                const colorTwo = [{colorTwo[0]}, {colorTwo[1]}, {colorTwo[2]}];
              </span>
            )}
          </pre>
        )}
      </div>
    );
  }
};

export default App;
