import React from "react";
import ReactImageProcess from "react-image-process";
/*
const onComplete = (data) => {
  console.log("data:", data);
};
*/

const ReactImageProcessing = ({ image }) => {
  return (
    <div>
      <ReactImageProcess
        mode="waterMark"
        waterMarkType="text"
        waterMark={"WATER"}
        fontBold={false}
        fontSize={20}
        fontColor="#396"
        coordinate={[10, 20]}
      >
        <img src={image} alt="random_image" crossorigin />
      </ReactImageProcess>
    </div>
  );
};

export default ReactImageProcessing;
//참고: https://www.npmjs.com/package/react-image-process
