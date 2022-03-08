import styled from "styled-components";

//Body Gradient Randomizer

const gradSwatches = ['#27a2e9, #3936d4, #c41ac4, #7127e9', '#6141d3, #00B4DB, #0083B0, #27a2e9', '#a12fff, #2484dd', '#23cc99, #0083B0']

//Randomize order
for (let i = gradSwatches.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [gradSwatches[i], gradSwatches[j]] = [gradSwatches[j], gradSwatches[i]];
}

//Add commas except for last
for (let i = 0; i < (gradSwatches.length -1); i++) {
  gradSwatches[i] = gradSwatches[i] + ","
} 

const gradSwatchesSize = (200 * gradSwatches.length) * 3
const gradSwatchesTime = (gradSwatches.length * 30) * 3

export const StyledGreeting = styled.div`

    & h3 {
    margin-bottom: 20px;
    }

    & small {
    text-align: center; 
    display: block;
    
    margin-top: 25px;
    margin-bottom: 5px;
    
    transition: all var(--transitionDefault);
    }

    

    & .greetingStats {
      margin-top: 5px;
      margin-bottom: 30px;
      color: var(--W3);
      transition: all .2s;
    }

    & .greetingStats h4 {
      font-weight: 600;
      margin-bottom: 10px;
      margin-top: 30px;
      font-size: .95em;
      color: var(--W3);
    }

    & .greetingStats li {
      margin-top: 8px;
    }
    
    & .hitCount {
        background-color: var(--M1);
     
        padding-right: 5px;

        font-weight: 600;
        color: white;

        font-size: 1.2em;

        background-image: var(--gradient);
        background-size: 700%;
        animation: bg-animation 5s infinite alternate;

        transition: all var(--transitionDefault);
        
        user-select: none;
        cursor: default;
        
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

        -webkit-text-stroke-width: .5px;
        text-stroke-width: .5px;
    }

    .versionNum {
      padding-top: 5px;
      font-size: .9em;
      opacity: .7;
    }
`