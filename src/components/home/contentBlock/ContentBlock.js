import React from 'react';

//Styled Components
import { StyledContentBlock } from './ContentBlock.styled'


const ContentBlock = ({ children }) => {

  return (
    <StyledContentBlock>
        {children}
    </StyledContentBlock>
  )
};

export default ContentBlock;