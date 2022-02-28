//React
import React, { useState, useEffect } from 'react'

//React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Global Styles
import GlobalStyles from './components/global/Global';

//Layout Components
import Header from './components/global/Header/Header'

//Routes
import Home from './components/home/Home';

//React Helmet
import { Helmet, HelmetProvider } from 'react-helmet-async';

//Sound Effects
import useSound from 'use-sound'
import audioSprite from './audio/audiosprite.mp3'


function App() {


  /////////Global State/////////
  //App Level/Stage State - dictates what screen/component is shown
  const [levelState, setLevelState] = useState(0)

  function addLevelState() {
    let prevLevel = levelState
    setLevelState(prevLevel + 1)
  }

  function subLevelState() {
    let prevLevel = levelState
    setLevelState(prevLevel - 1)
  }


  

  //Workout Difficulty State (1-3)
  const [difficulty, setDifficulty] = useState(() => {
    
    //Check local storage. If there is a value, parse it and set that as default state, else default to Intermediate
    let localData = parseInt(localStorage.getItem('difficulty'))

    //Filter out to default Intermediate if localStorage is not valid
    if (localData !== 1 && localData !== 2 && localData !== 3) {
      localData = 2
    } 
    return localData ? localData : 2
  })

  //Set Difficulty
  function onSetDifficulty(level) {
    setDifficulty(level)
    localStorage.setItem("difficulty", level)

    //Scroll bottom
    setTimeout(function () {
      window.scrollTo(0, document.body.scrollHeight);
      clearTimeout()
  }, 1);
  }

  //useEffect - listens for the change in the 'difficulty' state. When it notices it, it calls the shuffle function again
  useEffect(() => {
    workoutShuffler()
  }, [difficulty])








  //Volume State
  const [volumeState, setVolume] = useState(() => {

    //Check local storage. If there is a value, parse it and set that as default state, else default to true
     let localData = localStorage.getItem('volume')
     let localBool = true

     if(localData === "false") {
       localBool = false
     } else {
       localBool = true
     }

     return localBool
  })


  function toggleVolume() {
    setVolume(prevVolume => !prevVolume)
  }

    //useEffect - listens for the change in the 'volume' state. When it notices it, it updates localStorage
    useEffect(() => {
      localStorage.setItem("volume", volumeState)
    }, [volumeState])








  //Local Hours State (For conditional rendering of Welcome Greeting)
  const [localTimeState] = useState( () => {
    const localDate = new Date()
    const localHours = localDate.getHours()
    return localHours
  })







  //Workout State

  //Master Exercise List (Where each playthrough will pull from)
  const masterExerciseList = {

    "bottom-up": [
      {
        name: "One Down Two Ups",
        cc: false,
        img: "one-down-two-ups.gif"
      },

      {
        name: "Figure 8s",
        cc: false,
        img: "figure-8s.gif"
      },

      {
        name: "Seated Knee Tucks",
        cc: false,
        img: "seated-knee-tucks.gif"
      },

      {
        name: "Pulse-Ups",
        cc: false,
        img: "pulse-ups.gif"
      },

      {
        name: "21 Crunches",
        cc: false,
        img: "21-crunches.gif"
      },

      {
        name: "Reverse Crunches",
        cc: false,
        img: "reverse-crunches.gif"
      },

      {
        name: "Bicycle Crunches",
        cc: false,
        img: "bicycle-crunches.gif"
      },

      {
        name: "Crunch Kicks",
        cc: false,
        img: "crunch-kicks.gif"
      },

      {
        name: "Leg Raises",
        cc: false,
        img: "leg-raises.gif"
      },

      {
        name: "Seated Ab Circles",
        cc: true,
        img: "seated-ab-circles.gif",
        time: 60
      },

    ],

    "bottom-up-rotation": [
      {
        name: "Black Widow Knee Slides",
        cc: false,
        img: "black-widow-knee-slides.gif"
      },

      {
        name: "Half Wipers",
        cc: false,
        img: "half-wipers.gif"
      },

      {
        name: "Straight Leg Wipers",
        cc: false,
        img: "straight-leg-wipers.gif"
      },

      {
        name: "Knee-In Twists",
        cc: false,
        img: "knee-in-twists.gif"
      },

      {
        name: "Climber Taps",
        cc: false,
        img: "climber-taps.gif"
      },

      {
        name: "Crossover Mountain Climbers",
        cc: false,
        img: "crossover-mountain-climbers.gif"
      },

      {
        name: "Twisting Pistons",
        cc: false,
        img: "twisting-pistons.gif"
      },

      {
        name: "Backwards 7s",
        cc: false,
        img: "backwards-7s.gif"
      },

    ],

    "obliques": [
      {
        name: "Russian Twists",
        cc: false,
        img: "russian-twists.gif"
      },

      {
        name: "Marching Planks",
        cc: false,
        img: "marching-planks.gif"
      },

      {
        name: "Cross Crunches",
        cc: false,
        img: "cross-crunches.gif"
      },

      {
        name: "Side Jack-Knives",
        cc: true,
        img: "side-jack-knives.gif",
        time: 60
      },

      {
        name: "Alternating Toe Taps",
        cc: false,
        img: "alternating-toe-taps.gif"
      },

      {
        name: "Sitting Punches",
        cc: false,
        img: "sitting-punches.gif"
      },

      {
        name: "Seated Corkscrews",
        cc: false,
        img: "seated-corkscrews.gif"
      },

      {
        name: "Reverse Corkscrews",
        cc: false,
        img: "reverse-corkscrews.gif"
      },

      {
        name: "Elbow Knee Tucks",
        cc: false,
        img: "elbow-knee-tucks.gif"
      },

      {
        name: "Side Cycles",
        cc: true,
        img: "side-cycles.gif",
        time: 60
      },

    ],

    "mid-range": [
      {
        name: "Otis-Ups",
        cc: false,
        img: "otis-ups.gif"
      },

      {
        name: "Pendulum Plank Reach Outs",
        cc: false,
        img: "pendulum-plank-reach-outs.gif"
      },

      {
        name: "Hand-Free Tucks",
        cc: false,
        img: "hand-free-tucks.gif"
      },

      {
        name: "Flutter Kicks",
        cc: false,
        img: "flutter-kicks.gif"
      },

      {
        name: "Scissors",
        cc: false,
        img: "scissors.gif"
      },

      {
        name: "V-Ups",
        cc: false,
        img: "v-ups.gif"
      },

      {
        name: "Alternating Elbow Knee Planks",
        cc: false,
        img: "alternating-elbow-knee-planks.gif"
      },

    ],

    "top-down-rotation": [
      {
        name: "Starfish Crunches",
        cc: false,
        img: "starfish-crunches.gif"
      },

      {
        name: "Alternating Elbow Knee Crunches",
        cc: false,
        img: "alternating-elbow-knee-crunches.gif"
      },

      {
        name: "Alternating Thigh Taps",
        cc: false,
        img: "alternating-thigh-taps.gif"
      },

      {
        name: "Rotating V-Ups",
        cc: false,
        img: "rotating-v-ups.gif"
      },

      {
        name: "Dead Bugs",
        cc: false,
        img: "dead-bugs.gif"
      },

      {
        name: "Side Scissor Crunches",
        cc: true,
        img: "side-scissor-crunches.gif",
        time: 60
      },

      {
        name: "Plank Toe Taps",
        cc: false,
        img: "plank-toe-taps.gif"
      },

    ],

    "top-down": [
      {
        name: "Levitation Crunches",
        cc: false,
        img: "levitation-crunches.gif"
      },

      {
        name: "Frog Crunches",
        cc: false,
        img: "frog-crunches.gif"
      },

      {
        name: "90/90 Crunches",
        cc: false,
        img: "90-90-crunches.gif"
      },

      {
        name: "Butterfly Sit-Ups",
        cc: false,
        img: "butterfly-sit-ups.gif"
      },

      {
        name: "Hundreds",
        cc: false,
        img: "hundreds.gif"
      },

      {
        name: "Sit-Ups",
        cc: false,
        img: "sit-ups.gif"
      },

      {
        name: "Corpse-Crunches",
        cc: false,
        img: "corpse-crunches.gif"
      },

      {
        name: "Upper-Circle-Crunches",
        cc: true,
        img: "upper-circle-crunches.gif",
        time: 60
      },
    ],

    "rest": [
      {
        name: "Rest",
        cc: false,
        img: "rest.gif",
        time: 30
      },
    ]
  }


  ///////////////////Master Exercise List Exact Copy (without any exercises that are CC (double/alternating))
  const masterExerciseListFalseCC = Object.assign({}, masterExerciseList)

    //Filter CC out of bottom-up
    let bottomUpFalseCC = masterExerciseListFalseCC['bottom-up']
    bottomUpFalseCC = bottomUpFalseCC.filter(function( obj ) { return obj.cc !== true })

    //Filter CC out of bottom-up-rotation
    let bottomUpRotationFalseCC = masterExerciseListFalseCC['bottom-up-rotation']
    bottomUpRotationFalseCC = bottomUpRotationFalseCC.filter(function( obj ) { return obj.cc !== true })

    //Filter CC out of obliques
    let obliquesFalseCC = masterExerciseListFalseCC['obliques']
    obliquesFalseCC = obliquesFalseCC.filter(function( obj ) { return obj.cc !== true })

    //Filter CC out of mid-range
    let midRangeFalseCC = masterExerciseListFalseCC['mid-range']
    midRangeFalseCC = midRangeFalseCC.filter(function( obj ) { return obj.cc !== true })

    //Filter CC out of top-down-rotation
    let topDownRotationFalseCC = masterExerciseListFalseCC['top-down-rotation']
    topDownRotationFalseCC = topDownRotationFalseCC.filter(function( obj ) { return obj.cc !== true })

    //Filter CC out of top-down
    let topDownFalseCC = masterExerciseListFalseCC['top-down']
    topDownFalseCC = topDownFalseCC.filter(function( obj ) { return obj.cc !== true })

    //Get rest
    let restFalseCC = masterExerciseListFalseCC['rest']
  
  //Put these arrays back into a new object
  const masterExerciseListFalseCCObj = {
    "bottom-up": bottomUpFalseCC,
    "bottom-up-rotation": bottomUpRotationFalseCC,
    "obliques": obliquesFalseCC,
    "mid-range": midRangeFalseCC,
    "top-down-rotation": topDownRotationFalseCC,
    "top-down": topDownFalseCC,
    "rest": restFalseCC,
  }
  ///////////////////End of Master Exercise List Exact Copy (without any exercises that are CC (double/alternating))


  

  ///////////////Global Workout Exercise State (The current state for this iteration. Will pull pseudo-randoms from masterExerciseList)
  const [workoutList, setWorkoutList] = useState([])
  

  //Workouts are built in 3 functions
  //1. Workout Shuffler - Array Builder - this uses several different workout structure variations to build the base workout: workoutShuffler()
  //2. Time Shuffler - this takes the built workout array and assigns pseudo-random durations for each exercise: workoutShuffleTimer()
  //3. Difficulty Tuner - this builds off of the completed workout array, but either adds or subtracts durations based on the difficulty state: workoutDifficultyTuner()
  //4. Set the state: setWorkoutList()

  /////////////////////////////////////////////////

  //1. Workout Array Builder Function (Algorithm / Array Builder)

  function workoutShuffler() {
    //Set Variables for Random Selections
    const randomBottomUp = masterExerciseList['bottom-up'][Math.floor(Math.random()*masterExerciseList['bottom-up'].length)]
    const randomBottomUpRotation = masterExerciseList['bottom-up-rotation'][Math.floor(Math.random()*masterExerciseList['bottom-up-rotation'].length)]
    const randomObliques = masterExerciseList['obliques'][Math.floor(Math.random()*masterExerciseList['obliques'].length)]
    const randomMidRange = masterExerciseList['mid-range'][Math.floor(Math.random()*masterExerciseList['mid-range'].length)]
    const randomTopDownRotation = masterExerciseList['top-down-rotation'][Math.floor(Math.random()*masterExerciseList['top-down-rotation'].length)]
    const randomTopDown = masterExerciseList['top-down'][Math.floor(Math.random()*masterExerciseList['top-down'].length)]
    const rest = masterExerciseList['rest'][0]

    //Arrays for Random Workout Structure Variations
    //Some workouts will have a rest after the first 2 movements, some after the third movement, etc.
    //Some workouts may have an additional random exercise

    //If any random variable has a cc=true value, pick one of these preset cc workouts
    //If any of the randomly selected workouts has a cc = true, you MUST select index 0, otherwise, random

    //Set variables for CC: false Random Selections
    const ccrandomBottomUp = masterExerciseListFalseCCObj['bottom-up'][Math.floor(Math.random()*masterExerciseListFalseCCObj['bottom-up'].length)]
    const ccrandomBottomUpRotation = masterExerciseListFalseCCObj['bottom-up-rotation'][Math.floor(Math.random()*masterExerciseListFalseCCObj['bottom-up-rotation'].length)]
    const ccrandomObliques = masterExerciseListFalseCCObj['obliques'][Math.floor(Math.random()*masterExerciseListFalseCCObj['obliques'].length)]
    const ccrandomMidRange = masterExerciseListFalseCCObj['mid-range'][Math.floor(Math.random()*masterExerciseListFalseCCObj['mid-range'].length)]
    const ccrandomTopDownRotation = masterExerciseListFalseCCObj['top-down-rotation'][Math.floor(Math.random()*masterExerciseListFalseCCObj['top-down-rotation'].length)]
    const ccrandomTopDown = masterExerciseListFalseCCObj['top-down'][Math.floor(Math.random()*masterExerciseListFalseCCObj['top-down'].length)]
    const ccrest = masterExerciseListFalseCCObj['rest'][0]

    const ccworkoutVariations = [
      // Seated Ab Circle - bottom-up
      [{name: "Seated Ab Circles (Clockwise)",cc: true,img: "seated-ab-circles.gif",time: 60},{name: "Seated Ab Circles (Counter Clockwise)",cc: true,img: "seated-ab-circles-cc.gif",time: 60},ccrandomObliques,ccrest,ccrandomMidRange,ccrandomTopDownRotation,ccrest,ccrandomTopDown],
      // Side Jack Knives - obliques
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrest,{name: "Side Jack-Knives (Left Side)", cc: true, img: "side-jack-knives.gif", time: 60},{name: "Side Jack-Knives (Right Side)", cc: true, img: "side-jack-knives-cc.gif", time: 60},ccrandomMidRange,ccrest,ccrandomTopDown],
      // Side Cycles - obliques
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrest,{name: "Side Cycles (Left Side)",cc: true,img: "side-cycles.gif",time: 60},{name: "Side Cycles (Right Side)",cc: true,img: "side-cycles-cc.gif",time: 60},ccrest,ccrandomTopDownRotation,ccrandomTopDown],
      // Side Scissor Crunches - top-down-rotation
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrandomObliques,ccrest,ccrandomMidRange,ccrandomTopDown,ccrest,{name: "Side Scissor Crunches (Left Side)",cc: true,img: "side-scissor-crunches.gif",time: 60},{name: "Side Scissor Crunches (Right Side)",cc: true,img: "side-scissor-crunches-cc.gif",time: 60}],
      //Upper-Circle Crunches - top-down
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrandomObliques,ccrest,ccrandomMidRange,ccrandomTopDown,ccrest,{name: "Upper-Circle-Crunches (Clockwise)",cc: true,img: "upper-circle-crunches.gif",time: 60},{name: "Upper-Circle-Crunches (Counter Clockwise)",cc: true,img: "upper-circle-crunches-cc.gif",time: 60}],
      
      //Normal Random 3r2r1 (Balance out the CCs)
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrandomObliques,ccrest,ccrandomMidRange,ccrandomTopDownRotation,ccrest,ccrandomTopDown],
      //Normal Random 2r3r1 - (Balance out the CCs)
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrest,ccrandomObliques,ccrandomMidRange,ccrandomTopDownRotation,ccrest,ccrandomTopDown],
      // Normal Random 2r3r1 (Balance out the CCs)
      [ccrandomBottomUp,ccrandomBottomUpRotation,ccrest,ccrandomObliques,ccrandomMidRange,ccrandomTopDownRotation,ccrest,ccrandomTopDown],

       // Normal Random 3r3r1
       [ccrandomBottomUp,ccrandomBottomUpRotation,ccrandomObliques,ccrest,ccrandomMidRange,ccrandomTopDownRotation,ccrandomTopDown,ccrest,masterExerciseListFalseCCObj['mid-range'][Math.floor(Math.random()*masterExerciseList['mid-range'].length)]],
       // Normal Random 3r4
       [ccrandomBottomUp,ccrandomBottomUpRotation,ccrandomObliques,ccrest,ccrandomMidRange,ccrandomTopDownRotation,ccrandomTopDown,masterExerciseListFalseCCObj['mid-range'][Math.floor(Math.random()*masterExerciseList['mid-range'].length)]],
     
      
      
    ]


    const workoutVariations = [
      // 3r2r1
      [randomBottomUp,randomBottomUpRotation,randomObliques,rest,randomMidRange,randomTopDownRotation,rest,randomTopDown],
      // 3r3
      [randomBottomUp,randomBottomUpRotation,randomObliques,rest,randomMidRange,randomTopDownRotation,randomTopDown],
      // 2r3r1
      [randomBottomUp,randomBottomUpRotation,rest,randomObliques,randomMidRange,randomTopDownRotation,rest,randomTopDown],
      // 3r3r1
      [randomBottomUp,randomBottomUpRotation,randomObliques,rest,randomMidRange,randomTopDownRotation,randomTopDown,rest,masterExerciseList['mid-range'][Math.floor(Math.random()*masterExerciseList['mid-range'].length)]],
      // 3r4
      [randomBottomUp,randomBottomUpRotation,randomObliques,rest,randomMidRange,randomTopDownRotation,randomTopDown,masterExerciseList['mid-range'][Math.floor(Math.random()*masterExerciseList['mid-range'].length)]],
    ]

    let shuffledWorkout = workoutVariations[Math.floor(Math.random()*workoutVariations.length)]

    //For each array in the shuffledWorkout object, check to see if any of the key/values include cc: true
    let containsCC = false
    shuffledWorkout.forEach((exercise, index) => {
      if(exercise.cc === true) {
        containsCC = true
      }
    })

    //If any were found to be true, then changed the shuffledWorkout object with a random variation of ccworkoutVariations
    if(containsCC) {
      shuffledWorkout = ccworkoutVariations[Math.floor(Math.random()*ccworkoutVariations.length)]
    }
    
    //Pass over to 2. Time Shuffler
    workoutShuffleTimer(shuffledWorkout)

  }

  /////////////////////////////////////////////////

  //2. Time Shuffler (Set durations to each exercise)
  function workoutShuffleTimer(shuffledWorkout) {

    //For each exercise, check if it has a time set already. If not, set a random one
    shuffledWorkout.forEach(exercise => {
      if('time' in exercise) {
          return
        } else {
          //If time isn't set, set it to either 30 or 60. Currently, 30% chance of 30 seconds / 70% chance of 60 seconds
          let probability = Math.floor((Math.random() * (10 - 0 + 1) + 0));
          if (probability >= 3) {
            exercise.time = 60
          } else {
            exercise.time = 30
          }
        }
    })
    

    //Pass over to 3. Difficulty Tuner
    workoutDifficultyTuner(shuffledWorkout)
  }


  /////////////////////////////////////////////////

  //3. Difficulty Tuner (alter exercise durations based on the difficulty state)
  function workoutDifficultyTuner(shuffledWorkout) {
    //If advanced, add 10 (work), subtract 10 (rest). If beginner, subtract 10 (work), add 10 (rest)
    //console.log(shuffledWorkout)
    
    if(difficulty === 1) {
      //Beginner: If rest, 40. Else, subtract 10
      shuffledWorkout.forEach(exercise => {
        if(exercise.name === "Rest") {
          exercise.time = 45
        } else {
          if (exercise.time === 30) {
            exercise.time = 20
          } else if (exercise.time === 60) {
            exercise.time = 50
          }
        }
      })
    } else if(difficulty === 3) {
      //Advanced: If rest, 20. Else, add 10
      shuffledWorkout.forEach(exercise => {
        if(exercise.name === "Rest") {
          exercise.time = 20
        } else {
          if (exercise.time === 30) {
            exercise.time = 40
          } else if (exercise.time === 60) {
            exercise.time = 70
          }
        }
      })
    }

    //4. Set the setWorkoutList state
    setWorkoutList(shuffledWorkout)
  }

  /////////////////////////////////////////////////




  
  /////////End of Global State/////////




  /////////////////////Sound Effect Triggers//////////////////////////
  const [play, {stop}] = useSound(audioSprite, {
    sprite: {
        exerciseStart: [0, 3000],
        exercisePause: [11999, 2000],
        exerciseEnd: [4000, 4000],
        exerciseHalf: [16000, 2000],
        exerciseComplete: [20000, 22000],
        exerciseCount: [4000, 1000],
        tap: [19000, 500],
    },
})

  //When App State is changed - listen for levelState change
  useEffect(() => {
    //Check if muted
    if (volumeState) {
        if (levelState === 2) {
            stop()
            play({id: 'exerciseStart'})
        } else if (levelState === 3) {
          stop()
          play({id: 'exerciseComplete'})
        } else {
          stop()
          play({id: 'tap'})
        }
      }
  }, [levelState])

  //When workout is shuffled - listen for workoutList change (will also play sound on difficulty change, because it calls setWorkoutList)
  useEffect(() => {
    //Check if muted
    if (volumeState) {
          stop()
          play({id: 'tap'})
      }
  }, [workoutList])


  

  return (
    <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>AbShift - Workout Generator</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/*Favicon Links*/}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#089daf" />
      <meta name="msapplication-TileColor" content="#9ed6c4" />
      <meta name="theme-color" content="#9ed6c4" />

      {/*Content Meta Tags*/}
      <meta name="keywords" content="ab workout, 6 pack, 6 pack abs, six pack, abs, how to get abs, abdominal, abdominals, abdominal muscles, workout, guided workout, quick abs, ab timer, workout timer, obliques" />
      <meta name="description" content="AbShift is an effective follow along abdominal workout randomizer. Each workout provides total coverage of the abdominal muscles by targeting bottom-up, mid-range, top-down, and rotational movements." />
      <meta name="subject" content="Simple, effective, and scientifically generated abdominal muscle workouts" />
      <meta name="copyright"content="FossFitness - Built by odacavo" />
      <meta name="language" content="en" />
      <meta name="url" content="https://abshift.com" />
      <meta name="identifier-URL" content="https://abshift.com" />

      {/*Open Graph*/}
      <meta property="og:title" content="AbShift - Workout Generator" />
      <meta property="og:site_name" content="AbShift - Workout Generator" />
      <meta property="og:url" content="https://abshift.com" />
      <meta property="og:description" content="AbShift is an effective follow along abdominal workout randomizer. Each  workout provides total coverage of the abdominal muscles by targeting bottom-up, mid-range, top-down, and rotational movements."/>
      <meta property="og:type" content="fitness.course" />

      {/*Misc SEO*/}
      <meta itemprop="name" content="AbShift - Workout Generator"/>
      <meta itemprop="description" content="AbShift is an effective follow along abdominal workout randomizer. Each workout provides total coverage of the abdominal muscles by targeting bottom-up, mid-range, top-down, and rotational movements."/>
     
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@odacavo"/>
      <meta name="twitter:title" content="AbShift - Workout Generator"/>
      <meta name="twitter:description" content="AbShift is an effective follow along abdominal workout randomizer. Each workout provides total coverage of the abdominal muscles by targeting bottom-up, mid-range, top-down, and rotational movements."/>
      <meta name="twitter:image" content="https://www.abshift.com/mstile-310x310.png"/>

      <meta name="og:title" content="AbShift - Workout Generator"/>
      <meta name="og:description" content="AbShift is an effective follow along abdominal workout randomizer. Each workout provides total coverage of the abdominal muscles by targeting bottom-up, mid-range, top-down, and rotational movements."/>
      <meta name="og:url" content="https://abshift.com"/>
      <meta name="og:site_name" content="AbShift - Workout Generator"/>
      <meta name="og:locale" content="en_US"/>
      <meta name="og:type" content="website"/>
    </Helmet>

    <Router>
      <GlobalStyles />
      <Header
      volumeState={volumeState}
      toggleVolume={toggleVolume}
      setLevelState={setLevelState}
      />

      <Routes>
      <Route path="/" element={<Home 
      localTimeState={localTimeState}
      levelState={levelState}
      setLevelState={setLevelState}
      addLevelState={addLevelState}
      subLevelState={subLevelState}

      difficulty={difficulty}
      onSetDifficulty={onSetDifficulty}

      workoutList={workoutList}
      workoutShuffler={workoutShuffler}

      volumeState={volumeState}
      stop={stop}
      play={play}
      />} />

      <Route path="*" element={<Navigate to ="/" />}/>

      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
