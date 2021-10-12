import React from 'react';
import { Grid, Heading, Container } from '@openfrequency/component-library';

export default ({ title, children, ...props }) => {
    return(
        <Container {...props} pl='24px !important' pr='24px !important'>
            <Heading mb='17px' fontSize='24px' color='#17324A'>{title}</Heading>
            <Grid
                overflowX='auto' 
                overflowY='hidden' 
                gridGap='12px' 
                pb='5px'
                gridAutoFlow='column'
                scroll
            >
                {children}
            </Grid>
        </Container>
    )
}