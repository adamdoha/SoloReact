import React from 'react';

import Canvas from './Canvas';
import RegionsList from './RegionsList';

import useStore from '../store';

export default () => {
  const { setBrightness } = useStore();

  const DoFilter = () => {
    console.log('필터적용한다잇');
  };

  return (
    <React.Fragment>
      <h2>Doha's Role</h2>
      <p className="description">Filter & Blur</p>
      <div className="App">
        <div className="left-panel">
          밝기
          <input
            id="slider"
            type="range"
            min="-1"
            max="1"
            step="0.05"
            defaultValue="0"
            onChange={(e) => {
              setBrightness(parseFloat(e.target.value));
            }}
          />
          <RegionsList />
          <br />
          <button onClick={DoFilter}>필터 적용</button>
        </div>
        <div className="right-panel">
          <Canvas />
        </div>
      </div>
    </React.Fragment>
  );
};
