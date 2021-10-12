import React from 'react';
import { StyledLabel, TextStyled, Input } from '../design-system';

const DefaultInput = ({ label, standard, type }) => {
    return ( 
        <StyledLabel>
            <TextStyled as='span'>{ label ? label : 'Label'}</TextStyled>
            <Input type={type ? type : 'text'} border='1px solid #5C7F92' borderRadius='3px' default={standard} />
        </StyledLabel>
     );
}
 
export default DefaultInput;