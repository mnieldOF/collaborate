import React from 'react';
import { Heading, Box, Flex, DefaultButton, Icon, TextStyled } from '@openfrequency/component-library';

const AccountTypeCard = ({ buttonText, title, icon, children, titleColor, btnColor, width, ...props }) => {
    return(
        <Box border='1px solid #979797' borderRadius='10px' padding='20px' {...props}>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                <Icon icon={icon ? icon : 'Provisioner'} width={width ? width : '40%'} />
                <Heading color={titleColor}>{title ? title : 'Title'}</Heading>
                <TextStyled textAlign='center'>{children ? children : 'Lorem Ipsum'}</TextStyled>
                <DefaultButton bg={btnColor} width='100%' uppercase>{buttonText ? buttonText : 'click me'}</DefaultButton>
            </Flex>
        </Box>
    )
}

export default AccountTypeCard;