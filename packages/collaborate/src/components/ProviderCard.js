import React from 'react';
import { Flex, Box, StyledTag, Rating, Heading } from '@openfrequency/component-library';

const ProviderCard = () => {
    return(       
        <Box border='1px solid #979797' borderRadius='10px' width='250px' padding='10px'>
            <Flex flexDirection='column'> 
                <Flex flex='0 0 24px'>
                    <h1>left</h1>
                    <Flex flexDirection='column' alignItems='flex-start'>
                        <Heading m={0}>Provider Name</Heading>
                        <Rating />
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between'>
                    <StyledTag padding='5px 10px' borderRadius='86px' fontSize='12px' color='white' bg='#5C7F92'>Skill tag 1</StyledTag>
                    <StyledTag padding='5px 10px' borderRadius='86px' fontSize='12px' color='white' bg='#5C7F92'>Skill tag 2</StyledTag>
                    <StyledTag padding='5px 10px' borderRadius='86px' fontSize='12px' color='white' bg='#5C7F92'>Skill tag 3</StyledTag>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ProviderCard;