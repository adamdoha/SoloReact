import React from "react";
import { SampleConsumer } from "../contexts/sample";

const Receives = () => {
  return (
    <SampleConsumer>
      {(abc) => (
        <div>
          현재 설정된 값: {abc.state.value}
          <br />
          하아.. : {abc.state.name}
          <br />
          배열 : {abc.state.arrays}
        </div>
      )}
    </SampleConsumer>
  );
};

export default Receives;
