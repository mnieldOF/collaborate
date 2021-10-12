import React, { useState } from 'react';
import ResponseHeader from '../components/ResponseHeader';
import { TextStyled, DefaultButton, LinkStyled, StyledLabel, Input} from '@openfrequency/component-library';


const Login = () => {

    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    return( 
        <>
            <ResponseHeader bgColor='#e17000' title='Welcome back' boldText>
                Please log in to continue.       
            </ResponseHeader>
            <form
                onSubmit={(e) => e.preventDefault()}
            >
                <StyledLabel for=''>
                    <TextStyled as='span' >email address</TextStyled>
                    <Input 
                        type='email' 
                        border='1px solid #5c7f92' 
                        p='10px 15px' 
                        color='#17324a' 
                        borderRadius='3px' 
                        placeholder='name@email.com' 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </StyledLabel>
                <StyledLabel>
                    <TextStyled as='span' >password</TextStyled>
                    <Input 
                        type='password' 
                        border='1px solid #5c7f92' 
                        p='10px 15px' color='#17324a' 
                        borderRadius='3px' 
                        placeholder='name@email.com' 
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />                
                </StyledLabel>
            </form> 
            <DefaultButton 
                uppercase
                bg='#17324A' 
                color='white'
                href='/login'
                as='a'
                type='submit'
                disabled={loading}
            >
                {loading ? 'Loading...' : 'login'}
            </DefaultButton>
            <DefaultButton 
                uppercase
                bg='transparent' 
                color='#5C7F92'
                border='1px solid #5C7F92'
                href='/create-account'
                as='a'
            >
                Create Account
            </DefaultButton>    
            <LinkStyled href='/forgot-password'>Forgot password?</LinkStyled>    
        </>
    )
}

export default Login;