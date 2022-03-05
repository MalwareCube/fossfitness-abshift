import React from 'react';

//Styled Components
import { StyledCongrats } from './Congrats.styled'

//Icons
import { BsShare } from 'react-icons/bs';

//React Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';

//Congrats.js NPM package
import ConfettiGenerator from "confetti-js";


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
    "It always seems impossible until it's done.",
    "If it doesn't challenge you, it doesn't change you.",
    "You can have results or excuses. Not both.",
    "Never forget why you started.",
    "Enjoy the glow of good health."
]

//Confetti.js
React.useEffect(() => {
    const confettiSettings = { target: 'confettiCanvas', width: "600", max: "30", size: "1", rotate: true, respawn: true, clock: "15", props: ['square'] };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
   
    return () => confetti.clear();
  }, [])


  return (
      <>
        <Helmet>
            <title>AbShift - Workout Complete! 🎉</title>
        </Helmet>
      <StyledCongrats>
        <canvas id="confettiCanvas"></canvas>
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