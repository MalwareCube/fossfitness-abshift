import styled from "styled-components";

export const StyledContentBlock = styled.div`

    background-color: var(--W1);
    padding: 20px;
    margin: 20px;
    margin-top: 60px;

    border-radius: var(--mainBorderRadius);
    -webkit-box-shadow: var(--mainBoxShadow);
    box-shadow: var(--mainBoxShadow);

    transition: all var(--transitionDefault);

    //Tablet
    @media only screen and (min-width: 640px) {
        margin: auto;
        margin-top: 60px;
        margin-bottom: 60px;
        max-width: 600px;

        padding: 35px;
        padding-bottom: 20px;
    }
`