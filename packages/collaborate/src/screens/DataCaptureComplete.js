import React from 'react';
import { Icon, Heading, Flex, DefaultButton, StyledLabel, TextStyled, Input } from '@openfrequency/component-library';

const DataCapture1 = () => {

    return(
        <Flex flexDirection='column'>
            <Icon icon='confirmed' width='50%' />
            <Heading color='#979797'>Setup compete</Heading>
            <TextStyled color='#5c7f92' textAlign='center'>Your account creation is complete. We excited to welcome you to Collaborate. </TextStyled>
            <TextStyled 
                color='#5c7f92' 
                color='#E17000' 
                fontWeight='bold' 
                textAlign='center'
                fontSize='18px'
            >We can’t wait to see what wonderful things you create.
            </TextStyled>
            <DefaultButton bg='#17324a'>Select Subscription</DefaultButton>
        </Flex>
    )
}

export default DataCapture1;