import React from 'react';
import { StyledButton, Box } from '../design-system';

const DefaultButton = ({ children, text, onClick, after, ...props }) => {

  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default DefaultButton;
