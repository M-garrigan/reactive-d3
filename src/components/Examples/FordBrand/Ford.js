
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';

import { fordHierarchy } from './FordData.js';

import TitleBanner from '../titleBanner/TitleBanner.js';
import FordButton from './FordButton.js';
import FordSales from './FordSales.js';
import FordPack from './FordPack.js';
import FordLine from './FordLine.js';

import './Ford.css';


// https://github.com/Swizec/useDimensions
function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
}

const Ford = props => {

  const [data, setData] = useState(fordHierarchy);
  const [view, setView] = useState('landscape');
  const [year, setYear] = useState('2018');
  const [category, setCategory] = useState('All');
  const [featuredItem, setFeaturedItem] = useState('');
  const [rankBy, setRankBy] = useState('Yearly Increase');
  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);

  const wrapRef = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          let {width, height} = getDimensionObject(node);
          setDimensions({ 
            width: Math.round(width), 
            height: Math.round(height) 
          })
        });
      
      measure();

      window.addEventListener("resize", measure);

      return () => { window.removeEventListener("resize", measure); };
      }
  }, [node]);


  useEffect( () => {
    return () => props.setRoute([]);
  }, []);
  
  
  return (
    <div className="ford-wrapper" ref={wrapRef}>
      <TitleBanner title='Ford Sales - 2017 & 2018' />
      <div className="ford-flex">

        <FordButton 
          category={category}
          year={year}

          setCategory={setCategory}
          setYear={setYear}
        />

        <FordSales 
          category={category}
          data={data}
          dimensions={dimensions}
          rankBy={rankBy}
          view={view}
          year={year}

          setRankBy={setRankBy}
        />
        <FordPack 
          category={category}
          data={data}
          dimensions={dimensions}
          featuredItem={featuredItem}
          rankBy={rankBy}
          view={view}
          year={year}
        />
        <FordLine 
          category={category}
          data={data}
          dimensions={dimensions}
          featuredItem={featuredItem}
          view={view}
          year={year}
        />
      </div>
    </div>
  );
};

export default Ford;