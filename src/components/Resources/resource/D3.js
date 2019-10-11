

import React, { useEffect } from 'react';

import BooksSvg from '../BooksSvg.js';
import '../Resources.css';

export default props => {
  
  useEffect( () => {
    return () => props.setRoute([]);
  }, []);

  return (
    <div className="resources-wrapper">

      <div className="resources-title-wrapper"> 
        <BooksSvg dimensions={props.dimensions} />
        <p className="resources-title">D3</p>
      </div>

      <h2>SVG & Canvas</h2>
      <p>https://stackoverflow.com/questions/50141324/difference-between-svg-and-canvas-in-d3-js</p>

    </div>
  );
};