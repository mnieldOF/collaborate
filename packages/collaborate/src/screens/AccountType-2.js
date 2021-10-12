import React from 'react';
import { Heading, Icon, Flex, DefaultButton, TextStyled } from '@openfrequency/component-library';


const AccountType = () => {
    return(
        <Flex flexDirection='column' alignItems='center' justifyContent='center'>
            <Heading color='#5C7F92' my='30px' textAlign='center'>Ready for your close-up?</Heading>
            <Icon
                icon='Provisioner'
                width='50%'
            />   
            <TextStyled textAlign='center' my='40px'>Take a minute to upload a profile image or company logo.</TextStyled>
            <DefaultButton bg='#17324A' width='100%' mb='10px'>Set up Account</DefaultButton>
            <DefaultButton bg='transparent' border='1px solid #5C7F92' color='#5C7F92' width='100%'>Skip</DefaultButton>
        </Flex>     
    )
}

export default AccountType;