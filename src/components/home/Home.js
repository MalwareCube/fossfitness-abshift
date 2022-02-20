import React from 'react';

//Components
import ContentBlock from './contentBlock/ContentBlock'
import Greeting from './greeting/Greeting'
import WorkoutOverview from './workoutOverview/WorkoutOverview'
import WorkoutUI from './workoutUI/WorkoutUI'
import Congrats from './congrats/Congrats'


const Home = ({ 
  localTimeState,
  levelState,
  setLevelState,
  addLevelState,
  subLevelState,

  difficulty,
  onSetDifficulty,

  workoutList,
  workoutShuffler,

  volumeState,
 }) => {

  return (
    <>

{/*Content Block Rendering*/}
{(() => {
if (levelState !== 2){
return (
      <ContentBlock>
     
      {/*Level State 0: Greeting Screen*/}
      {(() => {
        if (levelState === 0){
          return (
            <Greeting
            localTimeState={localTimeState}
            addLevelState={addLevelState}
            workoutShuffler={workoutShuffler}
            />
          )
        }
      })()}

      {/*Level State 1: Workout Overview Screen*/}
      {(() => {
        if (levelState === 1){
          return (
            <WorkoutOverview
            difficulty={difficulty}
            onSetDifficulty={onSetDifficulty}

            workoutList={workoutList}
            workoutShuffler={workoutShuffler}

            addLevelState={addLevelState}
            />
          )
        }
      })()}



      {/* Level 2 is below, outside of ContentBlock */}



      {/*Level State 3: Congrats Screen*/}
      {(() => {
        if (levelState === 3){
          return (
            <Congrats setLevelState={setLevelState}/>
          )
        }
      })()}
      
      </ContentBlock>      
)
}
})()}

        {/*Level State 2: Workout UI - Outside of Content Block */}
        {(() => {
          if (levelState === 2){
            return (
              <WorkoutUI
              workoutList={workoutList}
              addLevelState={addLevelState}

              volumeState={volumeState}
              />
            )
          }
        })()}

    </>
  )
};

export default Home;