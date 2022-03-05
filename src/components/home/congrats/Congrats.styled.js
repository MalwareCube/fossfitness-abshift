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
        column-gap: 20px;
    }

    & .homeButton {
        background-color: var(--W2);
    }

    & .shareButton {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
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