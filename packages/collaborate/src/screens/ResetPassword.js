import React from 'react';
import ResponseHeader from '../components/ResponseHeader';
import { TextStyled, DefaultButton, StyledLabel, Input} from '@openfrequency/component-library';

const ResetPassword = () => {
    return(
        <>
            <ResponseHeader bgColor='#5C7F92' title='Reset password' >
                Please enter a new password.       
            </ResponseHeader>
            <form>
                <StyledLabel for=''>
                    <TextStyled as='span' >Password</TextStyled>
                    <Input type='password' border='1px solid #5c7f92' p='10px 15px' color='#17324a' borderRadius='3px' placeholder='name@email.com' />
                </StyledLabel>
                <StyledLabel>
                    <TextStyled as='span' >Re-enter password</TextStyled>
                    <Input type='password' border='1px solid #5c7f92' p='10px 15px' color='#17324a' borderRadius='3px' placeholder='name@email.com' />                
                </StyledLabel>
            </form> 
            <DefaultButton 
                uppercase
                bg='#17324A' 
                color='white'
                href='/login'
                as='a'
            >
                Reset Password
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
        </>
    )
}

export default ResetPassword;