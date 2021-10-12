import React, { useState, useRef } from 'react';
import DefaultButton from './DefaultButton';
import Icon from './Icon';
import { Input, Flex, StyledLabel, TextStyled, StyledTag, Box } from '../design-system';

const TagList = ({ label }) => {

    const [tags, setTags] = useState([
        'Tags',
        'Input'
    ]);

    const tagInput = useRef();

    const removeTag = (i) => {
        const newTags = [...tags];
        newTags.splice(i,1);
        setTags(newTags);
    }

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
            }
            setTags([...tags, val]);
            tagInput.current.value = null;

        } else if (e.key === 'Backspace' && !val) {
            removeTag(tags.length - 1);
        }
    };    

    return(
        <>  
            <StyledLabel>
                <TextStyled as='span' mb='5px' color='#5C7F92'>{label ? label : 'My skills'}</TextStyled>
                <Input 
                    border='1px solid #5C7F92' 
                    borderRadius='3px' 
                    height='40px' 
                    px='15px' 
                    color='#17324A'
                    fontSize='16px'
                    type="text" 
                    onKeyDown={inputKeyDown} ref={tagInput} 
                />
            </StyledLabel>
            <Flex flexDirection='row' flexWrap='wrap' mt='20px'>
                <>
                    { tags.map((tag, i) => ( 
                        <Box p='10px 15px' mr='10px' bg='#5C7F92' borderRadius='86px' mb='10px'>
                            <StyledTag key={tag} color='white' display='flex' alignItems='center'>
                                {tag}
                                <DefaultButton ml='15px' bg='transparent' p='0' type="button" onClick={() => { removeTag(i); }}><Icon icon='close-o' width='15px' /></DefaultButton>
                            </StyledTag>
                        </Box>
                    ))}
                </>
            </Flex>
        </>

    )
}

export default TagList;