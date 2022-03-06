import styled from "styled-components";

export const StyledWorkoutSettings = styled.div`
    transition: all var(--transitionDefault);
    margin-top: 40px;
    position: relative;

    & .settingsCloseIcon {
        position: absolute;
        right: 0;
        top: 2px;
        font-size: 1.8rem;
        color: var(--W3);
        opacity: .9;
        cursor: pointer;

        transition: all var(--transitionDefault);

        background: initial;
        border-radius: none;
        border: none;
        padding: 0;
        margin: 0;
        line-height: 0;
        width: auto;
    }

    & .settingsCloseIcon:hover {
        opacity: .5;
    }

    & .difficultyContainer {
        text-align: center;
        transition: all var(--transitionDefault);
    }

    & .difficultySettings {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        column-gap: 20px;
        flex-wrap: wrap;

        margin-top: 25px;
        margin-bottom: 25px;

        transition: all var(--transitionDefault);
    }

    & .difficultySetting {
        text-align: center;
        padding: 15px;
        border-radius: var(--mainBorderRadius);
        border: solid 2px #f1f1f1;
        background-color: var(--W1);

        margin-bottom: 20px;
        transition: all var(--transitionDefault);
    }

    & .difficultySetting img {
        margin-top: 20px;
        max-width: 70%;
        transition: all var(--transitionDefault);
        display: none;
    }

    & .difficultySetting h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--W3);
        margin-top: 10px;
        margin-bottom: 5px;
    }

    & .difficultySetting:hover {
        box-shadow: var(--secondaryBoxShadowHover);
    }

    & .selectedDifficulty {
        background-color: var(--P3);
        border-color: var(--P3);
    }

    & .selectedDifficulty img {
        transform: rotate(5deg);
    }

    //Tablet
    @media only screen and (min-width: 500px) {
        & .difficultySettings {
            flex-wrap: nowrap;
        }

        & .difficultySetting img {
            display: inline;
        }

        & .difficultyContainer {
        text-align: left;
         }
    }
`