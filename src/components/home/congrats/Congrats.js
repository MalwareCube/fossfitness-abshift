import React from 'react';

//Styled Components
import { StyledCongrats } from './Congrats.styled'

//Icons
import { BsShare } from 'react-icons/bs';

//React Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';

//homeButton - onClick, set level state back to 0, which will re-render the Welcome component / reset the app
//There will be a setLevelState function or whatever to control the entire app. Timers will trigger it to progress. Hitting "previous exercise" etc. will subtract one level state, progress one, etc.
// 0: home page, 1: after clicking begin. This component autogenerates the workout, 2: first exercise... etc: 10: Congrats component
// each level will have its own component state that doesn't need to be global. Etc: timer for each exercise, etc.
// on second thought, maybe workouts will be generated as global state. The reshuffle button will trigger shuffleWorkout or setWorkout function.
// The workout variable will be an object that all workout components will need to access workout.name workout.gif workout.time etc
//will need master array of objects for every single exercise - then the generated Workout array of objects will be the one for the app's iteration 
// workout - array of objects {
//    name: "Russian V Tuck Twists",
//    time: 30
//    gif: "../images/workouts/russian-v-tuck-twists.gif"
//}

const Congrats = ({
    setLevelState,
    }) => {


//Set Level State Back to 0 Function
function resetLevelState() {
    setLevelState(0)
  }

let shareText = "Share"

//Share Button Functionality
function shareClipboard() {
    navigator.clipboard.writeText('I just completed a follow along AbShift workout! Try one yourself on www.abshift.com 💪 #abshift')
    document.querySelector("#shareButton").innerHTML="Copied!"
}

const quotesArray = [
    "All progress takes place outside your comfort zone.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "We are always way stronger at the finish than we thought we were at the start.",
    "A little progress each day adds up to big results.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "The only bad workout is the one that didn't happen.",
    "The body achieves what the mind believes.",
    "Today, you chose to challenge yourself.",
    "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
    "Your health is an investment, not an expense.",
    "Mindset is what separates the best from the rest.",
    "The only bad workout is the one you didn't do.",
    "You don't find willpower. You create it.",
    "It never gets easier, you just get stronger.",
    "You came, you saw, you conquered.",
    "It always seems impossible until it's done",
    "If it doesn't challenge you, it doesn't change you.",
    "You can have results or excuses. Not both.",
    "Never forget why you started.",
    "Enjoy the glow of good health."
]

  return (
      <>
        <Helmet>
            <title>AbShift - Workout Complete! 🎉</title>
        </Helmet>
      <StyledCongrats>
          <h2>Congratulations! 🎉</h2>
          <h3>Workout Complete!</h3>
          <p>{quotesArray[Math.floor(Math.random() * quotesArray.length)]}</p>
          <p>Great job, and keep it up! Consistency is key.</p>

          <div className="congratsButtons">
              <button onClick={resetLevelState} className="homeButton "><span className="backHomeButtonSpan">Back to </span>Home</button>
              <button onClick={shareClipboard} className="shareButton" id="shareButton">{shareText} <BsShare title="Share Icon" description="Clicking this button will copy your results as sharable text to your clipboard"/></button>
          </div>

          <small>AbShift was created with 💪 by <a href="https://twitter.com/odacavo">odacavo</a></small>
      </StyledCongrats>
      </>
  )
};

export default Congrats;