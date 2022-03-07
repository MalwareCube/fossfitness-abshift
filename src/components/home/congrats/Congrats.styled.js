import styled from "styled-components";

export const StyledCongrats = styled.div`
    & h2 {
        text-align: center;
    }

    & h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    & p {
        text-align: center;
    }

    & small {
    text-align: center; 
    display: block;
    
    margin-top: 25px;
    margin-bottom: 5px;
    
    transition: all var(--transitionDefault);
    }

    & .congratsButtons {
        margin-top: 30px;
        display: flex;
        align-items: space-between;
        justify-content: center;
    }

    & .congratsButtons button {
        margin-right: 20px;
    }

    & .congratsButtons button:last-child {
        margin-right: 0px;
    }

    & .homeButton {
        background-color: var(--W2);
    }

    & .shareButton {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .shareButton svg {
        margin-left: 10px;
    }

    & .backHomeButtonSpan {
        display: none;
    }

    & #confettiCanvas {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
   
        pointer-events: none;
        overflow: hidden;
    }

    //Larger Phones
    @media only screen and (min-width: 440px) {
    & .backHomeButtonSpan {
        display: inline;
    }
    }
`