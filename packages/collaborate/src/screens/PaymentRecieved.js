import React from 'react';
import { Flex, Icon, Heading, TextStyled, DefaultButton, Slider } from '@openfrequency/component-library';

const PaymentRecieved = () => {
    return(
        <Flex height='100vh' width='100vw' bg='#17324A' alignItems='center' justifyContent='center' flexDirection='column'>
            <Icon icon='check-o' color='white' width='125px'/>
            <Heading color='white' mt='30px'>Payment revieved</Heading>
            <TextStyled textAlign='center' color='white' mt='15px'>Your payment has been received. Click below to start collaborating.</TextStyled>
            <DefaultButton bg='#5c7f92' width='100%'>Search Marketplace</DefaultButton>
            <Slider>
                <h1>
                    hi
                </h1>
                <h2>hi</h2>
            </Slider>
        </Flex>
    )
}

export default PaymentRecieved;