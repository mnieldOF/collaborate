import React from 'react';
import { Box, TextStyled, Container } from '@openfrequency/component-library';

export default ({ text }) => {
    return(
        <Box bg='#5C7F92' py='10px'>
            <Container>
                <TextStyled color='#fff' fontSize={['12px', null, '14px']} m={0}>{text ? text : 'Status bar text'}</TextStyled>
            </Container>
        </Box>
    )
}
