import React from 'react';
import { Icon, Heading, Flex, ToggleSwitch, DefaultButton } from '@openfrequency/component-library';

const DataCapture1 = () => {

    return(
        <Flex flexDirection='column'>
            <Icon icon='undraw_2' width='50%' />
            <Heading color='#E17000'>What do you want?</Heading>
            <ToggleSwitch text='Do you accept cash payments?' />
            <ToggleSwitch text='Would you accept delayed payments?' />
            <ToggleSwitch text='Would you accept shares?' />
            <ToggleSwitch text='Would profit share interest you?' />
            <DefaultButton bg='transparent' border='1px solid #5C7F92' color='#5C7F92' mt='10px'>Skip Profile Setup</DefaultButton>
        </Flex>
    )
}

export default DataCapture1;