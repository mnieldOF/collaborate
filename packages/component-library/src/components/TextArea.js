import React from 'react';
import { Textarea, StyledLabel, TextStyled } from '../design-system';

const TextArea = ({ standard, label }) => {
    return ( 
        <StyledLabel>
            <TextStyled as='span'>{label ? label : 'Label'}</TextStyled>
            <Textarea default={standard} />
        </StyledLabel>
     );
}
 
export default TextArea;