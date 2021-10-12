import React from 'react';
import ResponseHeader from '../components/ResponseHeader';
import { Flex, StyledImg, TextStyled, Box, Heading, DefaultButton, LinkStyled, StyledLabel, Input} from '@openfrequency/component-library';
import logo from '@openfrequency/component-library/src/images/collaborate-logo-notext.svg'; 

const ForgotPassword = () => {
    return(
        <>
            <ResponseHeader bgColor='#5c7f92' title='Forgot password'>
                Please enter your email address to request a password reset.
            </ResponseHeader>
            <form>
                <StyledLabel for=''>
                    <TextStyled as='span' >email address</TextStyled>
                    <Input type='email' border='1px solid #5c7f92' p='10px 15px' color='#17324a' borderRadius='3px' placeholder='name@email.com' />
                </StyledLabel>
                <DefaultButton 
                    uppercase
                    bg='#17324A' 
                    color='white'
                    href='/check-your-inbox'
                    as='a'
                >
                    Send Reset Link
                </DefaultButton>
                <DefaultButton 
                    uppercase
                    bg='transparent' 
                    color='#5C7F92'
                    border='1px solid #5C7F92'
                    href='/login'
                    as='a'
                >
                    Cancel
                </DefaultButton>            
            </form>
        </>
    )
}

export default ForgotPassword;