import React from 'react';
import { Box, Containetr, Flex, Icon, Heading, TextStyled, Container } from '@openfrequency/component-library';

export default ({ icon, title, text }) => {
    return(
        <Box>
            <Container>
                <Flex flexDirection='column' justifyContent='center' alignItems='center' my={5}>
                    <Icon icon={icon} width='50%'/>
                    <Heading color='#E17000' fontSize='60px' mt='20px'>{title}</Heading>
                    <TextStyled textAlign='center' color='#004B56'>{text}</TextStyled>
                </Flex>  
            </Container>
        </Box>
    )
}