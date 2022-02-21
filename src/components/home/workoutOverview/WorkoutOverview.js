import React, { useState } from 'react';


//Styled Components
import { StyledWorkoutOverview } from './WorkoutOverview.styled'

//SubComponents
import WorkoutSettings from './workoutSettings/WorkoutSettings'

//Icons
import { TiArrowShuffle } from 'react-icons/ti';
import { IoSettingsSharp } from 'react-icons/io5';

const WorkoutOverview = ({
difficulty,
onSetDifficulty,

workoutList,
workoutShuffler,

addLevelState,

volumeState,
stop,
play,
}) => {



//Component Level State

//Show Settings State
const [showSettings, setSettings] = useState(false)

function toggleSettings() {
    const prevState = showSettings
    setSettings(!prevState)

    //Check if muted and play tap sound
    if (volumeState) {
        stop()
        play({id: 'tap'})
    }
}

//Handle Shuffle Click
function handleShuffle() {
    workoutShuffler()
    setTimeout(function () {
        window.scrollTo(0, document.body.scrollHeight);
        clearTimeout()
    }, 1);
}




//Conditional Render Difficulty Booleans
let isBeginner = false
let isIntermediate = false
let isAdvanced = false
let difficultyString = ""

if(difficulty === 1) {
    difficultyString = "Beginner"
    isBeginner = true
    isIntermediate = false
    isAdvanced = false
} else if (difficulty === 2) {
    difficultyString = "Intermediate"
    isIntermediate  = true
    isBeginner = false
    isAdvanced = false
} else if (difficulty === 3) {
    difficultyString = "Advanced"
    isAdvanced = true
    isIntermediate  = false
    isBeginner = false
}



//Set total time variable
let totalWorkoutSeconds = 0
workoutList.map((exercise, index) => {
    totalWorkoutSeconds += exercise.time
    return totalWorkoutSeconds
})

//Convert totalWorkoutSeconds to time
var totalWorkoutTime = new Date(totalWorkoutSeconds * 1000).toISOString().substr(15, 4)



return (
    <StyledWorkoutOverview>
        <div className="workoutOverviewTitle">
            <h2>{difficultyString} Workout</h2>
        </div>

        <div className="exerciseBlocks">
            <ul>


        {/* Exercise Mapping */}
        {/*Map through workoutList array, and for each one, create an exerciseBlock list item */}
        {workoutList.map((exercise, index) => (
            <li className="exerciseBlock" key={index}>
                <div className="exerciseBlockInfo">
                    <h3>{exercise.name}</h3>
                    <h4>{exercise.time} Seconds</h4>
                </div>
                
                <div className="exerciseBlockImg">
                    <img alt={exercise.name} src="https://i.imgur.com/PWPU7sR.png"/>
                    {/*src={exercise.img}*/}
                </div>
            </li>
        ))}

            </ul>
        </div>

        <div className="workoutOverviewButtons">
            <h3>Total Workout Time: {totalWorkoutTime}</h3>
                <div className="workoutOverviewButtonContainer">
                    <button onClick={addLevelState} className="startWorkoutButton">Start<span className="startWorkoutButtonSpan"> Workout</span></button>
                    <button onClick={handleShuffle} className="reshuffleButton"><TiArrowShuffle title="Reshuffle Workout" description="Clicking this button will reshuffle the workout's exercise list"/></button>
                    <button onClick={toggleSettings} className="settingsButton"><IoSettingsSharp title="Workout Settings" description="Clicking this button will open the workout's settings menu"/></button>
                </div>
        </div>

        {showSettings ? <WorkoutSettings
        toggleSettings={toggleSettings}
        
        onSetDifficulty={onSetDifficulty}

        isBeginner={isBeginner}
        isIntermediate={isIntermediate}
        isAdvanced={isAdvanced}

        workoutShuffler={workoutShuffler}
        
        /> : null}
        
    </StyledWorkoutOverview>
  )
};

export default WorkoutOverview;