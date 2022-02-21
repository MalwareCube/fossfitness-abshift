import React from 'react';

const ProgressBar = ({
  progressBarWidth,
}) => {

  const styledProgressBar = {
    height: '10px',
    width: `${progressBarWidth}%`,

    background: 'linear-gradient(to right, #ffffff, #bbbbbb, #cccccc, #dddddd)',
    mixBlendMode: 'overlay',

    backgroundSize: '100vw',
    WebkitBoxShadow: '0px 3px 11px 1px rgba(0,0,0,0.40)', 
    boxShadow: '0px 3px 11px 1px rgba(0,0,0,0.40)',
    transition: 'width 1s linear'
  }

  return (
  <div style={styledProgressBar} />
  )
};

export default ProgressBar;
