import React from 'react';
import { Flex, StyledImg, TextStyled, Box, Heading, DefaultButton, LinkStyled, StyledLabel, Input} from '@openfrequency/component-library';
import logo from '@openfrequency/component-library/src/images/collaborate-logo-notext.svg'; 


const ResponseFullScreen = ({ bg, title, children}) => {
    return(
        <Box bg={bg} px='15px'>
            <Flex flexDirection='column' justifyContent='center' alignItems='center' position='relative'>
                <StyledImg  src={logo} alt="logo" />
                <Heading as='h3' fontSize='48px' color='white' textAlign='center'>{title}</Heading>
                <TextStyled textAlign='center' color='#17324A'>{children}</TextStyled>
                <DefaultButton
                    uppercase
                    bg='#17324A' 
                    color='white'
                    href='/check-your-inbox'
                    as='a'
                    width='100%'
                >
                    Resend link
                </DefaultButton>
                <DefaultButton 
                    uppercase
                    bg='transparent' 
                    color='white'
                    border='1px solid white'
                    href='/login'
                    as='a'
                    width='100%'
                >
                    Back to Log In
                </DefaultButton> 
            </Flex>
        </Box>

    )
}

export default ResponseFullScreen;