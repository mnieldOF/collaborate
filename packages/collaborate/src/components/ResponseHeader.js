import React from 'react';
import { Flex, StyledImg, TextStyled, Box, Heading, DefaultButton, LinkStyled, StyledLabel, Input} from '@openfrequency/component-library';
import logo from '@openfrequency/component-library/src/images/collaborate-logo-notext.svg'; 

const ResponseHeader = ({bgColor, children, title, boldText}) => {
    return(
        <Box bg={bgColor} py='30px'>
            <Flex flexDirection='column' jusifyConetnt='center' alignItems='center'>
                <StyledImg  src={logo} alt="logo" />
                <Heading as='h3' fontSize='48px' color='white' textAlign='center'>{title}</Heading>
                <TextStyled color='#17324a' textAlign='center' fontWeight={boldText ? 'bold' : 'normal'}>{children}</TextStyled>            
            </Flex>        
        </Box>
    )
}

export default ResponseHeader;