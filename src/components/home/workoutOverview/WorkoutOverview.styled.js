import styled from "styled-components";

export const StyledWorkoutOverview = styled.div`

    position: relative;

    & .workoutOverviewTitle {
        text-align: center;
        max-width: 65%;
        border-bottom: solid 2px rgba(200, 200, 200, 0.24);
        margin: 0 auto;
        margin-bottom: 25px;
    }

    & .workoutOverviewTitle h2 {
        font-size: 1.2em;
        font-weight: 400;
    }

    & .exerciseBlocks {
        margin-bottom: 25px;
    }

    & .exerciseBlock {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 20px;

        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: solid 2px rgba(200, 200, 200, 0.5);
    }

    & .exerciseBlockInfo h3 {
        margin-bottom: 5px;
    }

    & .exerciseBlockInfo h4 {
        font-size: .9em;
    }

    & .exerciseBlockImg {
        max-width: 100px;
    }

    & .exerciseBlockImg img {
        width: 100%;
    }

    & .workoutOverviewButtons {
        text-align: center;
    }

    & .workoutOverviewButtonContainer {
        display: flex;
        justify-content: center;
        column-gap: 10px;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    & .reshuffleButton {
        background-color: var(--S1);
        font-size: 2em;
        line-height: 0;
        color: var(--W3);
        flex-basis: 30%;
    }

    & .settingsButton {
        background-color: var(--W2);
        font-size: 2em;
        line-height: 0;
        color: var(--W3);
        flex-basis: 30%;
    }

    & .startWorkoutButtonSpan {
        display: none;
    }

    //Larger Phones
    @media only screen and (min-width: 430px) {
        & .startWorkoutButtonSpan {
            display: inline;
        }
    }
`