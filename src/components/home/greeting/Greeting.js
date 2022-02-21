import React from 'react';

//Styled Components
import { StyledGreeting } from './Greeting.styled'


const Greeting = ({
  localTimeState,
  addLevelState,
  workoutShuffler,
}) => {

  //Setting welcome greeting variable based on current hour
  let welcomeGreetingMessage = "Hey There 👋"
  let welcomeGreetingSub = "Perfect time for a workout."
  
  if (localTimeState >= 0 && localTimeState < 4) {
    welcomeGreetingMessage = "Bonne Nuit 🌃"
    welcomeGreetingSub = "Never too late for a workout."
  } else if (localTimeState >= 4 && localTimeState < 8) {
    welcomeGreetingMessage = "Early Riser 🐦"
    welcomeGreetingSub = "Perfect time for a workout."
  } else if (localTimeState >= 8 && localTimeState < 12) {
    welcomeGreetingMessage = "Good Morning 🌅"
    welcomeGreetingSub = "Perfect time for a workout."
  } else if (localTimeState >= 12 && localTimeState < 17) {
    welcomeGreetingMessage = "Good Afternoon ⛅"
    welcomeGreetingSub = "Perfect time for a workout."
  } else if (localTimeState >= 17 && localTimeState < 21) {
    welcomeGreetingMessage = "Good Evening 🌇"
    welcomeGreetingSub = "Perfect time for a workout."
  } else if (localTimeState >= 21 && localTimeState <= 24) {
    welcomeGreetingMessage = "Good Night 🌃"
    welcomeGreetingSub = "Still time to get that workout in."
  } else {
    welcomeGreetingMessage = "Hey There 👋"
    welcomeGreetingSub = "Perfect time for a workout."
  }

  function greetingClick() {
    addLevelState()
    workoutShuffler()
  }

  return (
      <StyledGreeting>
        <h2>{welcomeGreetingMessage}</h2>
        <h3>{welcomeGreetingSub}</h3>
        <p>AbShift is an effective follow along abdominal workout randomizer. Each workout provides total coverage of the abdominal muscles by targeting bottom-up, mid-range, top-down, and rotational movements.</p>
        <button onClick={greetingClick}>Begin</button>
        <small>AbShift was created with 💪 by <a href="https://twitter.com/odacavo">odacavo</a></small>
      </StyledGreeting>
  )
};

export default Greeting;