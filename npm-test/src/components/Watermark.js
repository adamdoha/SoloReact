import React from "react";
import ReactImageProcess from "react-image-process";

const Watermark = ({ image }) => {
  return (
    <div>
      <ReactImageProcess
        mode="waterMark"
        waterMarkType="text"
        waterMark={"Doha"}
        fontBold={false}
        fontSize={20}
        fontColor="#396"
        coordinate={[10, 20]}
      >
        <img src={image} alt="random_image" />
      </ReactImageProcess>
    </div>
  );
};

export default Watermark;
