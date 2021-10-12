import React from 'react';
import { Flex, StyledImg, LinkStyled } from '@openfrequency/component-library';
import LogoAlt from '@openfrequency/component-library/src/images/collaborate-small-logo-variation.svg';

export default () => {
    return(
        <Flex as='footer' flexDirection='column' bg='#17324a' alignItems='center' justifyContent='center'>
            <StyledImg src={LogoAlt} />
            <LinkStyled href='/' uppercase color='white'>my dashboard</LinkStyled>
            <LinkStyled href='/' uppercase color='white'>FAQs</LinkStyled>
            <LinkStyled href='/' uppercase color='white'>Terms & Conditions</LinkStyled>
            <LinkStyled href='/' uppercase color='white'>Privacy policy</LinkStyled>
        </Flex>
    )
}