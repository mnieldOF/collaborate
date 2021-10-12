import React from 'react'
import { Input, Icon, Box, Flex } from '@openfrequency/component-library';

export default ({ value }) => {
    return(
        <Box 
            maxWidth='325px' 
            m='15px auto' 
            boxShadow='0px 1px 6px rgba(0, 0, 0, 0.35)'
            borderRadius='3px'
            p='15px 0'
            textAlign='center'
        > 
            <Flex alignItems='center' justifyContent='center'>
                <Icon icon='search' width='15px' bg='transparent'/>
                <Input border={0} fontSize='16px' color='#979797' ml='10px' value={value}/>
            </Flex>       
        </Box>
    )
}