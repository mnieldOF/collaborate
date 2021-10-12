import React from 'react';
import { Icon, Heading, Flex, DefaultButton, StyledLabel, TextStyled, Input, Select } from '@openfrequency/component-library';

const DataCapture1 = () => {

    return(
        <Flex flexDirection='column'>
            <Icon icon='city' width='50%' />
            <Heading color='#E17000'>About your company</Heading>
            <TextStyled color='#5c7f92'>Company Details</TextStyled>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Company Type</TextStyled>
                <Select />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>My Position</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Established Date</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Companies House Number</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>VAT Number</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Company Type</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Area of Business</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Location</TextStyled>
                <Input type='text' default />
            </StyledLabel>
            <StyledLabel>
                <TextStyled color='#5c7f92'>Company Size</TextStyled>
                <Input type='number' default />
            </StyledLabel>
            <DefaultButton bg='#17324a'>Done</DefaultButton>
            <DefaultButton bg='transparent' border='1px solid #5C7F92' color='#5C7F92' mt='10px'>Skip Profile Setup</DefaultButton>
        </Flex>
    )
}

export default DataCapture1;