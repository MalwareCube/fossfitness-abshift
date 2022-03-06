import styled from "styled-components";

export const StyledWorkoutUI = styled.div`

    padding-left: 20px;
    padding-right: 20px;
    transition: all var(--transitionDefault);


    //Footer Saver
    & .footerSaver {
        height: 150px;
        transition: all var(--transitionDefault);
        position: relative;
    }

    //Exercise Header
    & .exerciseHeader {
        color: var(--W1);
        text-align: center;

        margin-top: 40px;
        margin-bottom: 20px;
        transition: all var(--transitionDefault);
    }

    & .exerciseHeader h4 {
        color: var(--W1);
        font-size: .9em;
        margin-bottom: 15px;
    }

    & .exerciseHeader h2 {
        color: var(--W1);
        font-size: 1.8em;
        line-height: 1.2em;
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    & .exerciseHeader h3 {
        color: var(--W1);
    }


    //Exercise Demonstration

    & .exerciseDemonstration {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto;
        max-width: 1200px;
        margin-bottom: 20px;

        color: var(--W1);
        text-align: center;
        transition: all var(--transitionDefault);
    }

    & .completedEx {
        display: none;
        flex-basis: 25%;
        text-decoration: line-through;
        filter: blur(2px);
        transition: all var(--transitionDefault);
        opacity: .7;
        cursor: default;
    }

    & .completedEx h2 {
        color: var(--W1);
    }

    & .completedEx h3 {
        color: var(--W1);
    }

    & .exerciseImg {
        flex-basis: 100%;
        position: relative;
        //max-height: 25vh;
        
        max-width: 400px;
        margin: 0 auto;
    }

    & .exerciseImg img {
        max-width: 100%;
        mix-blend-mode: screen;
        transition: all 5s;
    }


    .pausedIndicator {
    
    }

    & .nextEx {
        display: none;
        flex-basis: 25%;
        transition: all var(--transitionDefault);
        opacity: .7;
        cursor: default;
    }

    & .nextEx h2 {
        color: var(--W1);
    }

    & .nextEx h3 {
        color: var(--W1);
    }

    & .mobileNext {
        text-align: center;
        opacity: .9;
        transition: all var(--transitionDefault);
        display: none;

        width: 100%;

        position: fixed;
        pointer-events: none;
    }

    & .mobileNext h3 {
        color: var(--W1);
        font-size: .9em;
        line-height: 1.3;
    }

    & .mobileNextBold {
        font-weight: 800;
    }


    //Playback Buttons
    & .playbackButtons {
        display: flex;
        column-gap: 20px;
        justify-content: center;
        align-items: stretch;

        max-width: 350px;
        margin: 0 auto;
        transition: all var(--transitionDefault);
        position: relative;
    }

    & .playbackButtons button {
        background-color: var(--W1);
        box-shadow: var(--secondaryBoxShadow);
        color: var(--W4);
        transition: all var(--transitionDefault);
    }

    & .playButton {
        flex-basis: 20%;
        line-height: 0;
        font-size: 1.5em;
    }

    & .prevDisabled {
        opacity: .2;
        cursor: default;
        pointer-events: none;
    }


     /*Devices Smaller Than 330px*/
     @media only screen and (max-width : 330px) {
        & .playbackButtons button {
            font-size: 1em;
        }

           & .playButton {
        font-size: 1.4em !important;
        }

        & .exerciseHeader h2 {
                font-size: 1.5em;
            }

            & .exerciseHeader h3 {
                font-size: .9em;
            }
     }


     /*Larger Phones / Tablets*/
    @media only screen and (min-width : 550px) {
        & .playbackButtons {
            column-gap: 30px;
            max-width: 360px;
        }

        & .exerciseHeader h2 {
        font-size: 2em;
        line-height: 1.2em;
        }

         //Footer Saver
        & .footerSaver {
        height: 170px;
        transition: all var(--transitionDefault);
        }
    }

     /*Desktop*/
     @media only screen and (min-width : 1000px) {
        & .completedEx {
        display: block;
        }

        & .exerciseImg {
            flex-basis: 50%;
        }

        & .nextEx {
            display: block;
        }
    }

    /*On taller screen heights, bump the top padding down a bit to make it look more proportional*/
    @media only screen and (min-height : 821px) {
        & .exerciseHeader {
            margin-top: 60px;
            margin-bottom: 40px;
        }

        & .playbackButtons {
            margin-top: 40px;
        }
    }

        /*On shorter screen heights, fixed float the buttons*/
        @media only screen and (max-height : 820px) {
            position: relative;

        & .playbackButtons {
            position: fixed;
            z-index: 999;

            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            bottom: 180px;
        }
        }

        /*On super short rotated screens, make buttons blend in less.*/
        @media only screen and (max-height : 450px) {

            & .exerciseHeader {
                opacity: .3;
                filter: blur(1px);
            }

            & .exerciseHeader h2 {
                font-size: 1.5em;
            }

            & .exerciseHeader h3 {
                font-size: .9em;
            }

        }

        /*If screen height is less than 300, just give up on the buttons*/
        @media only screen and (max-height : 300px) {
            & .playbackButtons {
                opacity: 0;
                pointer-events: none;
            }
        }





        /*Mobile Next Width Tweak*/
        @media only screen and (min-width: 195px) and (max-width:350px) and (min-height: 300px) { 
            & .mobileNext {
                display: block;
                
                bottom: 110px;
                left: 0;
                
                padding-left: 20px;
                padding-right: 20px;
                margin: 0;
            }
        }

        /*Mobile Next Width Tweak*/
        @media only screen and (min-width:351px) and (max-width:550px) and (min-height: 300px) { 
            & .mobileNext {
                display: block;
                
                bottom: 130px;
                left: 0;
                
                padding-left: 20px;
                padding-right: 20px;
                margin: 0;
            }
        }

            /*Mobile Next Width Tweak*/
            @media only screen and (min-width:551px) and (max-width:999px) and (min-height: 300px) { 
            & .mobileNext {
                display: block;
                
                bottom: 140px;
                left: 0;
                
                padding-left: 20px;
                padding-right: 20px;
                margin: 0;
            }
        }





        
`