import React from "react";
import SepiaImageFilter from "./components/SepiaImageFilter";

const App = () => {
  return (
    <div>
      <SepiaImageFilter
        image="https://source.unsplash.com/random/1200x800"
        filter="sepia"
      />
    </div>
  );
};

export default App;
