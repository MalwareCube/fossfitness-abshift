import React from 'react';

//Styled Components
import { StyledWorkoutSettings } from './WorkoutSettings.styled'

//Icons
import { RiCloseFill } from 'react-icons/ri'

//Images
import { default as Beginner } from '../../../../images/workoutSettings/beginner.svg'
import { default as Intermediate } from '../../../../images/workoutSettings/intermediate.svg'
import { default as Advanced } from '../../../../images/workoutSettings/advanced.svg'

const WorkoutSettings = ({
    toggleSettings,
    onSetDifficulty,

    isBeginner,
    isIntermediate,
    isAdvanced,

    workoutShuffler,
}) => {


    //Difficulty Set Handler
    function difficultyHandler(diffValue) {
    
    //onSetDifficulty, pass in argument
    onSetDifficulty(diffValue)

    //Update CountAPI
    fetch('https://api.countapi.xyz/hit/abshift.com/abshift')
    }

  return (
    <StyledWorkoutSettings>
        <button onClick={toggleSettings} className="settingsCloseIcon"><RiCloseFill tabIndex="0" title="Close Settings Menu" description="Clicking this button will close the Workout Settings menu."/></button>

        <div className="workoutOverviewTitle">
            <h2>Workout Settings</h2>
        </div>

        <div className="difficultyContainer">
            <h3>Difficulty</h3>
            {/*If state.difficultySetting=0 , insert classname "selectedDifficulty" under the first div, etc.*/}

            <div className="difficultySettings">
                <button onClick={() => difficultyHandler(1)} className={`difficultySetting ${isBeginner ? "selectedDifficulty" : ""}`}>
                    <img alt="Beginner Difficulty" src={Beginner}/>
                    <h4>Beginner</h4>
                </button>

                <button onClick={() => difficultyHandler(2)} className={`difficultySetting ${isIntermediate ? "selectedDifficulty" : ""}`}>
                    <img alt="Intermediate Difficulty" src={Intermediate}/>
                    <h4>Intermediate</h4>
                </button>

                <button onClick={() => difficultyHandler(3)} className={`difficultySetting ${isAdvanced ? "selectedDifficulty" : ""}`}>
                    <img alt="Advanced Difficulty" src={Advanced}/>
                    <h4>Advanced</h4>
                </button>
            </div>
        </div>

    </StyledWorkoutSettings>
  )
};

export default WorkoutSettings;