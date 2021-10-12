import React from 'react';
import { Box, Heading, Tabs, List, Flex, DefaultButton, TextStyled } from '@openfrequency/component-library';

const Subscription = () => {
    return(
        <>
            <Box bg='#5C7F92' py='20px'>
                <Heading textAlign='center' color='white'>Subscriptions</Heading>
            </Box>
            <Tabs />
            <Flex width='fit-content' border='2px solid #5c7f92' alignItems='center' alignContent='center' borderRadius='80px' justifyContent='center'>
                <TextStyled color='#5c7f92' mr='10px' ml='25px'>&#163;</TextStyled>
                <TextStyled color='#5c7f92' m={0}fontSize='60px'>25</TextStyled> 
                <TextStyled color='#5c7f92' ml='10px' mr='25px'>/month</TextStyled> 
            </Flex>
            <TextStyled textAlign='center' color='#17324a'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</TextStyled>
            <List />
            <DefaultButton width='100%' bg='#17324a' color='white' >Subscribe</DefaultButton>
            <DefaultButton width='100%' bg='transparent' color='#5c7f92' border='1px solid #5c7f92' mt='10px' >Cancel</DefaultButton>
        </>
    )
}

export default Subscription;