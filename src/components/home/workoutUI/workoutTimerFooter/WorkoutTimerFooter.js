import React from 'react';

//Styled Components
import { StyledWorkoutTimerFooter } from './WorkoutTimerFooter.styled'

const WorkoutTimerFooter = ({
    timeElapsed,
    timeCurrent,
    timeRemaining,
}) => {

  return (
      <StyledWorkoutTimerFooter>

        <div className="workoutFooterContainer">
            <div className="smallTimeBlock">
                <h3>Total Elapsed</h3>
                <time>{("0" + Math.floor((timeElapsed / 60) % 60)).slice(-2)}:{("0" + Math.floor((timeElapsed / 1) % 60)).slice(-2)}</time>
            </div>

            <div className="mainTimeBlock">
                <h3>Set Remaining</h3>
                <time>{("0" + Math.floor((timeCurrent / 60) % 60)).slice(-2)}:{("0" + Math.floor((timeCurrent / 1) % 60)).slice(-2)}</time>
            </div>

            <div className="smallTimeBlock">
                <h3>Total Remaining</h3>
                <time>{("0" + Math.floor((timeRemaining / 60) % 60)).slice(-2)}:{("0" + Math.floor((timeRemaining / 1) % 60)).slice(-2)}</time>
            </div>
        </div>

      </StyledWorkoutTimerFooter>
  )
};

export default WorkoutTimerFooter;