import React from 'react';
import { Icon, Heading, Flex, StyledLabel, Input, TextStyled, ToggleSwitch, DefaultButton } from '@openfrequency/component-library';

const DataCapture1 = () => {

    return(
        <Flex flexDirection='column'>
            <Icon icon='Live' width='50%' />
            <Heading color='#E17000'>Where are you?</Heading>
            <StyledLabel>
                <TextStyled as='span'>Current Location</TextStyled>
                <Input type='text' />
            </StyledLabel>
            <ToggleSwitch text='Are you willing to relocate?' />
            <ToggleSwitch text='Can you work remotely?' />
            <DefaultButton bg='#17324A'>Next: Your Skills</DefaultButton>
            <DefaultButton bg='transparent' border='1px solid #5C7F92' color='#5C7F92' mt='10px'>Skip Profile Setup</DefaultButton>
        </Flex>
    )
}

export default DataCapture1;