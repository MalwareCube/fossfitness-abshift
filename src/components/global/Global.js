import { createGlobalStyle } from "styled-components";

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

const GlobalStyles = createGlobalStyle`

//Google Fonts

/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/open-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/open-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* open-sans-600 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('../fonts/open-sans-v27-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/open-sans-v27-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CSS Reset/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }
  
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End Of CSS Reset/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/





/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Variables/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
:root {
  
  //Gradients
  --gradient: linear-gradient(45deg,${gradSwatches});

  //Swatches
  --P1: #91f0d0;
  --P2: #80d8ba;
  --P3: #ccffee;

  --M1: #009daf;

  --S1: #91dcff;
  --S2: #34aaf8;

  --A1: #7a1f76;
  --A2: #ad3ca8;

  --W1: #ffffff;
  --W2: #d4d4d4;
  --W3: #414141;
  --W4: #292929;
  --W5: #000000;


  //Transitions
  --transitionDefault: .12s;

  //Fonts
  --mainFont: 'Open Sans', sans-serif;

  //Border Radius
  --mainBorderRadius: 10px;
  --smallerBorderRadius: 5px;

  //Box Shadow
  --mainBoxShadow: 0px 7px 17px 0px rgba(0,0,0,0.6);
  --secondaryBoxShadow: 0px 5px 7px 0px rgba(0,0,0,0.14);
  --secondaryBoxShadowHover: 0px 3px 10px 0px rgba(0,0,0,0.14);
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End Of Variables/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/






/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Standard Elements/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
html {
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  
  min-height: 100%;

}

body {
  font-family: var(--mainFont);
  font-size: 16px;
  
  background-image: var(--gradient);
  background-size: ${gradSwatchesSize}%;
  animation: bg-animation ${gradSwatchesTime}s infinite alternate;
  overflow-x: hidden;

  min-height: 100%;
}


::selection {
  background-color: var(--M1);
  color: var(--W1);
}

h2 {
  font-family: var(--mainFont);
  color: var(--W4);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;

  margin-bottom: 10px;
  transition: all var(--transitionDefault);
}

h3 {
  font-family: var(--mainFont);
  color: var(--W3);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.8rem;

  margin-bottom: 10px;
  transition: all var(--transitionDefault);
}

p {
  font-family: var(--mainFont);
  color: var(--W4);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;

  margin-bottom: 20px;
  transition: all var(--transitionDefault);
}

a {
  color: var(--A1);
  text-decoration: none;

  transition: all var(--transitionDefault);
}

a:hover {
  color: var(--A2);
}

button {
  font-family: var(--mainFont);
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;

  border: none;
  background: none;
  background-color: var(--P1);
  border-radius: var(--smallerBorderRadius);

  width: 100%;
  padding: 20px;

  cursor: pointer;
  transition: all var(--transitionDefault);
}

button:hover {
  opacity: .8;
}

small {
  font-family: var(--mainFont);
  font-size: .8em;
  color: var(--W3);
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End Of Standard Elements/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/






/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Animations/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
@keyframes bg-animation {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End Of Animations/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*Remove hover effects if no hover detected*/
@media (hover: none) {
    .button {
        opacity: 1;
    }

    .button:hover {
        opacity: 1;
    }


`
export default GlobalStyles