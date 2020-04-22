import React from 'react';

import Canvas from './Canvas';
import RegionsList from './RegionsList';

import useStore from '../store';

export default () => {
  const { setBrightness } = useStore();

  return (
    <React.Fragment>
      <h2>Doha's Role</h2>
      <p className="description">Filter & Blur</p>
      <div className="App">
        <div className="left-panel">
          Brigthess
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
          <button>필터 적용</button>
        </div>
        <div className="right-panel">
          <Canvas />
        </div>
      </div>
    </React.Fragment>
  );
};
