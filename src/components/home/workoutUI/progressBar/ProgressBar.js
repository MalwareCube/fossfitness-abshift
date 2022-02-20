import React, {useEffect} from 'react';

//Styled Components
//import { StyledProgressBar } from './ProgressBar.styled';

const ProgressBar = ({
  progressBarWidth,
}) => {

  //Everytime set remaining time gets updated (ticks), calculate percentage needed for progressbar width

  

  const styledProgressBar = {
    height: '10px',
    width: `${progressBarWidth}%`,

    background: 'linear-gradient(to right, #ffffff, #bbbbbb, #cccccc, #dddddd)',
    mixBlendMode: 'overlay',

    backgroundSize: '100vw',
    WebkitBoxShadow: '0px 3px 11px 1px rgba(0,0,0,0.40)', 
    boxShadow: '0px 3px 11px 1px rgba(0,0,0,0.40)',
    transition: 'all 1s linear',
  }

  return (
  <div style={styledProgressBar} />
  )
};

export default ProgressBar;
