import React from "react";
import ImageFilter from "react-image-filter";

const SepiaImageFilter = ({ image, filter }) => {
  return (
    <div>
      <ImageFilter
        image={image}
        filter={filter} // see docs beneath
      />
    </div>
  );
};

export default SepiaImageFilter;
