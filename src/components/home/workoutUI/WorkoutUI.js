import React, { useState, useEffect } from 'react';
import useSound from 'use-sound'

//Styled Components
import { StyledWorkoutUI } from './WorkoutUI.styled'

//Icons
import { IoPlay, IoPause } from 'react-icons/io5'

//SubComponents
import ProgressBar from './progressBar/ProgressBar'
import WorkoutTimerFooter from './workoutTimerFooter/WorkoutTimerFooter'

//Sound Effects
import exerciseStart from '../../../audio/exercise-start.mp3'
import exerciseHalf from '../../../audio/exercise-half.mp3'
import exerciseEnd from '../../../audio/exercise-end.mp3'
import exercisePause from '../../../audio/exercise-pause.mp3'

import workoutComplete1 from '../../../audio/workout-complete1.mp3'

const WorkoutUI = ({
    workoutList,
    addLevelState,
}) => {

    ////////////////////////////////////////
    //Workout UI - App Level State
    ///////////////////////////////////////

    //Workouts will be sequentially loaded from the array's index

        //In this function, it will say "if index is greater than array length, don't do anything. But rather, change the APP level state to 3 (congrats screen)"

    //Function to decrease App Level State (subtract 1 to the array index / go back a workout)


    const [workoutLevelState, setWorkoutLevelState] = useState(0)

     //Function to progress App Level State (add 1 to the array index / go forward a workout)
     //In this function, it will say "if index is greater than array length, don't do anything. But rather, change the APP level state to 3 (congrats screen)"
    function addWorkoutLevelState() {
      let prevLevel = workoutLevelState
      setWorkoutLevelState(prevLevel + 1)
    }
  
    function subWorkoutLevelState() {
      let prevLevel = workoutLevelState
      setWorkoutLevelState(prevLevel - 1)
    }



    //Play / Pause State
    const [playState, setPlayState] = useState(true)

    function togglePlayState() {
        setPlayState(prevPlayState => !prevPlayState)
      }


    /////////////////////Timer States//////////////////////////
    
    //////////Total Elapsed Time (Seconds)
    const [timeElapsed, setTimeElapsed] = useState(0)

  
    //If elapsed countup gets over 3600 (1 hour), then reset it. Listen to every tick
    useEffect(() => {
        if(timeElapsed >= 3599) {
            setTimeElapsed(0)
        }
    }, [timeElapsed])



    //////////Current Set Remaining Time (Seconds)
    const [timeCurrent, setTimeCurrent] = useState([workoutList[workoutLevelState].time])
    //TotalRemaining State
    const [timeRemaining, setTimeRemaining] = useState(0)


        //Main useEffect interval controller - controls timeCurrent, timeRemaining, and timeElapsed
        //Listen for change in Play/Pause. If so, then either continue the countdown or don't
        useEffect(() => {
            let interval = null;
            if(playState) {
                interval = setInterval(() => {
                    //Set Current Time
                    setTimeCurrent(prevTime => prevTime - 1)

                    //Set Total Remaining
                    setTimeRemaining(prevTime => prevTime - 1)

                    //Set TimeElapsed
                    setTimeElapsed(prevTime => prevTime + 1)

                }, 1000)
            } else {
                clearInterval(interval)
            }
    
            return () => clearInterval(interval)
        }, [playState])

          //If set countdown gets over 0, then reset it and change the WorkoutLevelState
            useEffect(() => {
                if(timeCurrent <= 0) {
                    if (workoutLevelState >= (workoutList.length - 1)){
                        addLevelState()
                    } else {
                        addWorkoutLevelState()
                    }
                }
            }, [timeCurrent])


    //UseEffect - listen for workout Add or subtract, and if it changes, update currentTime default state
    useEffect(() => {
        setTimeCurrent(workoutList[workoutLevelState].time)
    }, [workoutLevelState])


    //////////Total Remaining
        
        //Any time the workoutLevelState is changed, timeRemaining should be recalculated
        useEffect(() => {
            let totalAddedSeconds = 0
            workoutList.map((exercise, index) => {
                if(index >= workoutLevelState) {
                    totalAddedSeconds += exercise.time
                }
                return totalAddedSeconds
            })

            setTimeRemaining(totalAddedSeconds)
        }, [workoutLevelState])


    /////////////////////End of Timer States//////////////////////////



    /////////////////////Sound Effect Triggers//////////////////////////
    const [playExerciseStart] = useSound(exerciseStart)
    const [playExerciseHalf] = useSound(exerciseHalf)
    const [playExerciseEnd, { stop }] = useSound(exerciseEnd)
    const [playExercisePause] = useSound(exercisePause)

    const [playWorkoutComplete1] = useSound(workoutComplete1)

    //When Level State is changed:
    useEffect(() => {
        if (playState) {
            playExerciseStart()
        } else {
            playExercisePause()
        }
    }, [workoutLevelState])

    //When exercise is ending
    useEffect(() => {
        if(timeCurrent === 3) {
            playExerciseEnd()
        }
    }, [timeCurrent])

    //When play/pause state changes
    useEffect(() => {
        if (playState) {
            playExerciseStart()
        } else {
            playExercisePause()
        }
    }, [playState])


    /////////////////////End of Sound Effect Triggers//////////////////////////


    ///////////Misc///////////
    function handleFinishWorkout() {
        playWorkoutComplete1()
        addLevelState()
    }

  return (
    <>
        <ProgressBar/>
        <StyledWorkoutUI>
            
            <div className="exerciseHeader">
                <h4>Set {workoutLevelState + 1} out of {workoutList.length}</h4>
                <h2>{workoutList[workoutLevelState].name}</h2>
                <h3>{playState ? `${workoutList[workoutLevelState].time} seconds` : "Workout Paused"}</h3>

            </div>
            

            <div className="exerciseDemonstration">
                <div className="completedEx">
                    {/* Conditional Rendering - If the workout index state is NOT 0, then show "previous workout". Else (for first exercise) don't show it */}
                    {(() => {
                        if (workoutLevelState !== 0){
                        return (
                            <>
                                <h3>Completed:</h3>
                                <h2>{workoutList[workoutLevelState - 1].name}</h2>
                                <h4>{workoutList[workoutLevelState - 1].time} seconds</h4>
                            </>
                        )
                        }
                    })()}
                </div>



                <div className="exerciseImg">
                    <img alt="Exercise Demonstration" src="https://i.imgur.com/PWPU7sR.png"/>
                    {/*If state is paused, show this*/}
                    {/* <div className="pausedIndicator">Workout Paused</div> */}
                </div>



                <div className="nextEx">
                    {/* Conditional Rendering - If the workout index state is NOT 0, then show "previouis workout". Else (for first exercise) don't show it */}
                    {(() => {
                    if (workoutLevelState >= (workoutList.length - 1)) {
                    return (
                        <>
                        </>
                        )
                        } else {
                            return(
                                <>
                                <h3>Next Up:</h3>
                                <h2>{workoutList[workoutLevelState + 1].name}</h2>
                                <h4>{workoutList[workoutLevelState + 1].time} seconds</h4>
                                </>
                            )
                        }
                    })()}
                </div>
            </div>


            <div className="playbackButtons">

                {/*Conditional Rendering - if it's the first exercise, display the Disabled version of the button*/} 
                {(() => {
                    if (workoutLevelState !== 0){
                    return (<button onClick={subWorkoutLevelState}>Previous</button>)
                    } else {
                        return (<button onClick={subWorkoutLevelState} disabled className="prevDisabled">Previous</button>)
                    }
                })()}




                <button onClick={togglePlayState} className="playButton">{playState ? <IoPause/> : <IoPlay/>}</button>
                {/*If last exercise, change "Next" to "Finish / End Workout" */}




                {/*Conditional Rendering - if it's the last exercise, display the "End Workout" version of the button*/} 
                {(() => {
                    if (workoutLevelState >= (workoutList.length - 1)){
                    return (<button onClick={handleFinishWorkout}>Finish</button>)
                    } else {
                        return (<button onClick={addWorkoutLevelState}>Next</button>)
                    }
                })()}

            </div>

        
        
        <div className="footerSaver"/>
        <WorkoutTimerFooter
        timeElapsed={timeElapsed}
        timeCurrent={timeCurrent}
        timeRemaining={timeRemaining}
        />
        
      </StyledWorkoutUI>
    </>
  )
};

export default WorkoutUI;