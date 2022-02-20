import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

//Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');


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
  --gradient: linear-gradient(
    45deg,
    #be2b2b,
    #be6d2b,
    #beaf2b,
    #59be2b,
    #2bbe68,
    #2bbeaa,
    #2b88be,
    #2b59be,
    #5e2bbe,
    #a52bbe,
    #be2b8d,
    #be2b2b
  );

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
}

body {
  font-family: var(--mainFont);
  font-size: 16px;
  
  min-height: 100vh;
  background-image: var(--gradient);
  background-size: 2000%;
  animation: bg-animation 420s infinite alternate;

  overflow-x: hidden;
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


`
export default GlobalStyles