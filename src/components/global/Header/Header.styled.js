import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--W1);

    & .headerContainer {
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all var(--transitionDefault);
    }

    & .logoBlock {
        width: 95px;
        transition: all var(--transitionDefault);
        cursor: pointer;
    }

    & .volumeBlock {
        transition: all var(--transitionDefault);
    }

    & .volumeButton {
        max-width: 1.5em;
        transition: all var(--transitionDefault);
        cursor: pointer;
    }

    & .volumeButton:hover {
        opacity: .8;
        cursor: pointer;
    }
`