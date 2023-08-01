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
        //background-color: #f1f1f1;
        border-radius: 3px;
    }

    & .exerciseBlockImg img {
        width: 100%;
        //filter: blur(.5px) contrast(.8) invert(1);
        mix-blend-mode: multiply;
        transition: all .2s;
        opacity: .9;
    }

    & .workoutOverviewButtons {
        text-align: center;
    }

    & .workoutOverviewButtonContainer {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    & .workoutOverviewButtonContainer button {
        margin-right: 10px;
    }

    & .workoutOverviewButtonContainer button:last-child {
        margin-right: 0px;
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

    & .addExerciseButton {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;
    }

    & .addExerciseButton button {
      display: flex;
      justify-content: center;
      flex-basis: 13%;
      padding: 5px;
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