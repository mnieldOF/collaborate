import React from 'react';
import { DefaultButton } from '@openfrequency/component-library';
import { StyledMenu } from './Menu.styled';

const Menu = ({showNav}) => {
    return (
      <StyledMenu showNav={showNav}>
        <DefaultButton bg='transparent' border='1px solid white' uppercase mb='20px'>MarketPlace</DefaultButton>
        <DefaultButton bg='transparent' border='1px solid white' uppercase mb='20px'>My Profile</DefaultButton>
        <DefaultButton bg='transparent' border='1px solid white' uppercase mb='20px'>Message</DefaultButton>
        <DefaultButton bg='transparent' border='1px solid white' uppercase mb='20px'>Create new project</DefaultButton>
      </StyledMenu>
    )
  }
  export default Menu;