import React from 'react';
import { Icon, Heading, Flex, DefaultButton, TagList } from '@openfrequency/component-library';

const DataCapture1 = () => {

    return(
        <Flex flexDirection='column'>
            <Icon icon='undraw' width='50%' />
            <Heading color='#E17000'>What do you offer?</Heading>
            <TagList />
            <DefaultButton bg='#17324A'>Next: Compensation</DefaultButton>
            <DefaultButton bg='transparent' border='1px solid #5C7F92' color='#5C7F92' mt='10px'>Skip Profile Setup</DefaultButton>
        </Flex>
    )
}

export default DataCapture1;