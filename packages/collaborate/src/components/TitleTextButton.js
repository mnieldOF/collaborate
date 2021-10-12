import React from 'react';
import { Box, Container, Heading, TextStyled, DefaultButton } from '@openfrequency/component-library';

export default ({ title, text, titleSize, btnText }) => {
    return(
        <Box>
            <Container>
                <Heading color='#17324A' fontSize={titleSize} my={3} textAlign='center'>{title}</Heading>   
                <TextStyled color='#5C7F92' my={0} textAlign='center' >{text}</TextStyled> 
                {
                    btnText && <DefaultButton width='100%' >{btnText}</DefaultButton>
                }
            </Container>
        </Box>
    )
}
