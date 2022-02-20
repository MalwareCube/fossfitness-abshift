import styled from "styled-components";

export const StyledProgressBar = styled.div`
    height: 8px;
    width: 100%;

    background: linear-gradient(to right, #ffffff, #bbbbbb, #cccccc, #dddddd);
    mix-blend-mode: overlay;

    background-size: 100vw;
    -webkit-box-shadow: 0px 3px 11px 1px rgba(0,0,0,0.40); 
    box-shadow: 0px 3px 11px 1px rgba(0,0,0,0.40);
    transition: all .12s;
    transition: width 30s linear;
`