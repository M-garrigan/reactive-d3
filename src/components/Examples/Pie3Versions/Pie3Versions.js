
import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import { range } from 'd3-array';

import PieClass from "./PieClass";
import PieHooks from "./PieHooks";
import PieSVG from "./PieSVG";

import "./Pie3Versions.css";

const Pie3Versions = props => {

  useLayoutEffect( () => {
    return () => props.setRoute([]);
  });

  const generateData = (value, length = 5) =>
    range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  return (
    <div className="pie-wrapper">                                                                   
      <div>
        <button onClick={changeData}>Transform</button>
      </div>
      <div>
        <span className="label">React Class</span>
        <PieClass
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className="label">Hooks</span>
        <PieHooks
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className="label">SVG Elements</span>
        <PieSVG
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
    </div>
  );
}

export default Pie3Versions;