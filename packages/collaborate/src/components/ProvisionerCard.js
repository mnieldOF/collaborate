import React from 'react';
import { Flex, Box, Rating, TextStyled, Heading } from '@openfrequency/component-library';

const ProviderCard = () => {
    return(       
        <Box borderRadius='10px' width='250px' padding='10px'>
            <Flex>
                <h1>left</h1>
                <Flex flexDirection='column' alignItems='flex-start' width='100%'>
                    <Heading m={0}>Provisioner Name</Heading>
                    <Rating />
                    <TextStyled>10 Active Projects</TextStyled>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ProviderCard;