import React, { Component } from "react";
import PropTypes from "prop-types";
const NONE = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

const INVERT = [-1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, 1, 0];

const GRAYSCALE = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];

const SEPIA = [
  0.3,
  0.45,
  0.1,
  0,
  0,
  0.2,
  0.45,
  0.1,
  0,
  0,
  0.1,
  0.3,
  0.1,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
];

const types = {
  DUOTONE: "duotone",
  INVERT: "invert",
  GRAYSCALE: "grayscale",
  SEPIA: "sepia",
};

class ImageFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: `${new Date().getTime()}${Math.random()}`.replace(".", ""),
      filter: this.getMatrix(props),
    };
  }

  componentDidUpdate(nextProps) {
    const { filter, colorOne, colorTwo } = this.props;
    if (
      filter !== nextProps.filter ||
      (nextProps.filter === "duotone" &&
        (colorOne !== nextProps.colorOne || colorTwo !== nextProps.colorTwo))
    ) {
      this.setState({
        filter: this.getMatrix(nextProps, true),
      });
    }
  }

  getMatrix(props, triggerCallback = false) {
    let filter = props.filter;

    if (filter === types.GRAYSCALE) {
      filter = GRAYSCALE;
    } else if (filter === types.INVERT) {
      filter = INVERT;
    } else if (filter === types.SEPIA) {
      filter = SEPIA;
    } else if (filter === types.DUOTONE) {
      filter = this.convertToDueTone(props.colorOne, props.colorTwo);
    }

    if (
      triggerCallback &&
      props.onChange &&
      typeof props.onChange === "function"
    ) {
      props.onChange(filter);
    }

    return filter;
  }

  convertToDueTone(color1, color2) {
    return [
      color2[0] / 256 - color1[0] / 256,
      0,
      0,
      0,
      color1[0] / 256,
      color2[1] / 256 - color1[1] / 256,
      0,
      0,
      0,
      color1[1] / 256,
      color2[2] / 256 - color1[2] / 256,
      0,
      0,
      0,
      color1[2] / 256,
      0,
      0,
      0,
      1,
      0,
    ];
  }

  render() {
    const { image, preserveAspectRatio, svgProps } = this.props;

    const { id, filter } = this.state;

    const aspectRatio =
      preserveAspectRatio === "cover" ? "xMidYMid slice" : preserveAspectRatio;

    return (
      <div>
        {/* {renderImage && <img alt="" aria-hidden={true} src={image} />} */}
        <svg {...svgProps}>
          <filter id={`filter-image-${id}`} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values={filter.join(" ")} />
          </filter>
          <image
            filter={`url(#filter-image-${id})`}
            preserveAspectRatio={aspectRatio}
            xlinkHref={image}
            height="100%"
            width="100%"
          />
        </svg>
      </div>
    );
  }
}

ImageFilter.propTypes = {
  image: PropTypes.string.isRequired,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  preserveAspectRatio: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  svgStyle: PropTypes.object,
  svgProps: PropTypes.object,
  colorOne: PropTypes.array,
  colorTwo: PropTypes.array,
  onChange: PropTypes.func,
};

ImageFilter.defaultProps = {
  filter: NONE,
  preserveAspectRatio: "none",
  className: "",
  style: {},
  svgStyle: {},
  svgProps: {},
};

export default ImageFilter;
