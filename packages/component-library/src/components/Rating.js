import React, { useState } from 'react';
import Icon from './Icon';
import { Flex, StyledLabel, Input } from '../design-system';

const Rating = () => {

    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);

    return ( 
        <Flex alignItems='center' justifyContent='center'>
            {[...Array(5)].map((star, i) => {
                const rValue = i + 1;
                return (
                    <StyledLabel>
                        <Input type='radio' name='rating' value={rValue} onClick={() => setRating(rValue)} display='none'/>
                        <Icon 
                            icon='Star' 
                            color={rValue <= (rating || hover) ? '#FDC82F' : '#979797' } 
                            size='20' 
                            onMouseEnter={() => setHover(rValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </StyledLabel>
                )
            })}
        </Flex>
     );
}
 
export default Rating;  