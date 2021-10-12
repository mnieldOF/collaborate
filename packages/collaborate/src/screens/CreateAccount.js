import React from 'react'
import ResponseHeader from '../components/ResponseHeader';
import { TextStyled, DefaultButton, StyledLabel, Input} from '@openfrequency/component-library';


const CreateAccount = () => {
    return(
        <>
            <ResponseHeader bgColor='#e17000' title='Create account'>
                Please enter your details below and we’ll email you a sign up link.       
            </ResponseHeader>
            <form>
                <StyledLabel for=''>
                    <TextStyled as='span' >Name</TextStyled>
                    <Input type='text' border='1px solid #5c7f92' p='10px 15px' color='#17324a' borderRadius='3px' placeholder='Name' />
                </StyledLabel>
                <StyledLabel>
                    <TextStyled as='span' >Date of Birth</TextStyled>
                    <Input type='date' border='1px solid #5c7f92' p='10px 15px' color='#17324a' borderRadius='3px' placeholder='name@email.com' />                
                </StyledLabel>
                <StyledLabel>
                    <TextStyled as='span' >email address</TextStyled>
                    <Input type='email' border='1px solid #5c7f92' p='10px 15px' color='#17324a' borderRadius='3px' placeholder='name@email.com' />                
                </StyledLabel>
            </form> 
            <DefaultButton 
                uppercase
                bg='#17324A' 
                color='white'
                href='/login'
                as='a'
            >
                Sign up with email
            </DefaultButton>
            <DefaultButton 
                uppercase
                bg='transparent' 
                color='#5C7F92'
                border='1px solid #5C7F92'
                href='/login'
                as='a'
            >
                BAck to Login
            </DefaultButton>        
        </>
    )
}

export default CreateAccount;