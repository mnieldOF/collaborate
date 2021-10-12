import React from 'react';
import { Heading, Icon, Flex, DefaultButton, TextStyled } from '@openfrequency/component-library';


const AccountType = () => {
    return(
        <Flex flexDirection='column' alignItems='center' justifyContent='center'>
            <Icon
                icon='about_you'
                width='50%'
            />   
            <Heading color='#5C7F92' my='30px' textAlign='center'>It’s all about you</Heading>
            <TextStyled textAlign='center' color='#5C7F92'>We want to deliver the opportunities most suited to you desires.</TextStyled>
            <TextStyled textAlign='center' color='#5C7F92'>To help us do this, please answer some questions about yourself and what you and what you’re looking for.</TextStyled>
            <TextStyled textAlign='center' fontSize='18px' fontWeight='bold' color='#E17000'>The more we know, the better we can serve you.</TextStyled>
            <DefaultButton bg='#17324A' border='1px solid #5C7F92' color='white' width='100%'>Let’s get started</DefaultButton>
        </Flex>     
    )
}

export default AccountType;