import React from 'react';
import styled from '@emotion/styled';
import { Toggle, Flex, TextStyled} from '../design-system';

const ToggleSwitch = ({ text }) => {
    return(
        <Flex alignItems='center' justifyContent='space-between' borderBottom='1px solid #E7E7E7'>
            <TextStyled color='black'>{text ? text : 'Toggle Text'}</TextStyled>
            <Toggle>
                <input type="checkbox"></input>
                <span></span>
            </Toggle>
        </Flex>
    )
}

export default ToggleSwitch;