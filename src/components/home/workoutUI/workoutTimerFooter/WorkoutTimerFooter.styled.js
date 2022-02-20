import styled from "styled-components";

export const StyledWorkoutTimerFooter = styled.div`
    background-color: var(--W1);
    padding: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    transition: all var(--transitionDefault);

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    & .workoutFooterContainer {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        column-gap: 25px;
        transition: all var(--transitionDefault);
        
        margin: 0 auto;
        max-width: 800px;
    }

    & .smallTimeBlock {
        text-align: center;
        transition: all var(--transitionDefault);
    }

    & .smallTimeBlock h3 {
        font-size: .8em;
        font-weight: 600;
        line-height: 1.2em;
        color: #5a5a5a;
        margin-bottom: 5px;
        transition: all var(--transitionDefault);
    }

    & .smallTimeBlock time {
        font-family: var(--mainFont);
        font-size: 1.9em;
        display: block;
        transition: all var(--transitionDefault);
        color: var(--W3);
    }

    & .mainTimeBlock {
        text-align: center;
        transition: all var(--transitionDefault);
    }

    & .mainTimeBlock h3 {
        font-size: 1em;
        font-weight: 600;
        line-height: 1.2em;
        color: #5a5a5a;
        margin-bottom: 5px;
        transition: all var(--transitionDefault);
    }

    & .mainTimeBlock time {
        font-family: var(--mainFont);
        font-size: 2.9em;
        display: block;
        transition: all var(--transitionDefault);
        color: var(--W3);
    }

    /*Devices Smaller Than 350px*/
    @media only screen and (max-width : 350px) {

        & .smallTimeBlock h3 {
        font-size: .7em;
        }

        & .smallTimeBlock time {
        font-size: 1.5em;
        }

        & .mainTimeBlock h3 {
        font-size: .8em;
        }

        & .mainTimeBlock time {
        font-size: 2.3em;
        }
    }

    /*Larger Phones / Tablets*/
    @media only screen and (min-width : 550px) {

        padding-top: 30px;
        padding-bottom: 30px;

        & .workoutFooterContainer {
        justify-content: space-around;
        column-gap: 35px;
        }

        & .smallTimeBlock h3 {
        font-size: 1em;
        }

        & .smallTimeBlock time {
            font-size: 2.3em;
        }

        & .mainTimeBlock h3 {
            font-size: 1.1em;
        }

    & .mainTimeBlock time {
        font-size: 3.2em;
    }
    }

    /*Desktops*/
    @media only screen and (min-width : 850px) {

    & .workoutFooterContainer {
    justify-content: space-between;
    }

    & .smallTimeBlock h3 {
    font-size: 1em;
    }

    & .smallTimeBlock time {
        font-size: 2.5em;
    }

    & .mainTimeBlock h3 {
        font-size: 1.1em;
    }

    & .mainTimeBlock time {
    font-size: 3.4em;
    }
    }
`