import React from 'react';
import { Icon, Heading, Flex, TextArea, DefaultButton, StyledLabel, TextStyled } from '@openfrequency/component-library';

const DataCapture1 = () => {

    return(
        <Flex flexDirection='column'>
            <Icon icon='co_working' width='50%' />
            <Heading color='#E17000'>Anything else?</Heading>
            <TextStyled color='#5c7f92' textAlign='center'>Tell us about how you work, any soft skills, any hobbies or just your dreams and desires.</TextStyled>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Additional Information</TextStyled>
                <TextArea border='1px solid #5C7F92' p='10px 15px' height='199px' overflow='scroll' borderRadius='3px' />
            </StyledLabel>
            <DefaultButton bg='#17324a'>Done</DefaultButton>
            <DefaultButton bg='transparent' border='1px solid #5C7F92' color='#5C7F92' mt='10px'>Skip Profile Setup</DefaultButton>
        </Flex>
    )
}

export default DataCapture1;