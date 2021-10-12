import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box, StyledImg, StyledTag, Heading, TextStyled, Icon } from '@openfrequency/component-library';
import CardImg from '@openfrequency/component-library/src/images/card-img.png'; 

const StyledCard = styled(Flex)`
    scroll-snap-align: start;
`

const ProjectCard = () => {
    return(
        <StyledCard 
            borderRadius='10px' 
            overflow="hidden" 
            flexDirection='column'
            boxShadow='0px 2px 6px rgba(0, 0, 0, 0.15)'
            width='272px'
        >
            <Box width='100%' height='100px'>
                <StyledImg src={CardImg} width='100%' height='100px' center />
            </Box>
            <Flex flexDirection='column' m={3}>
                <Flex alignItems='center'>
                    <Heading as='h4'>Project title</Heading>
                    <Heading as='h6' ml='auto' color='#E17000'>£150/cash</Heading>
                </Flex>
                <TextStyled textAlign='left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextStyled>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Icon icon='calendar' width='15px' bg='transparent'/>
                    <TextStyled fontSize='12px' color='#17324A' m={0}>00/00/000</TextStyled>
                    <Icon icon='alarm' width='18px' bg='transparent'/>
                    <TextStyled fontSize='12px' color='#17324A' m={0}>1Y 4M 3D</TextStyled>
                    <Icon icon='pin' width='15px' bg='transparent'/>
                    <TextStyled fontSize='12px' color='#17324A' m={0}>Remote</TextStyled>
                </Flex>
                <Flex my='13px'>
                    <StyledTag 
                    p='5px 10px' 
                    bg='#5C7F92' 
                    color='white'
                    borderRadius='86px' 
                    mr='5px'
                    fontSize='12px'
                    >Skill Tag</StyledTag>
                    <StyledTag fontSize='12px' p='5px 10px' bg='#5C7F92' color='white'borderRadius='86px' mr='5px'>Skill Tag</StyledTag>
                    <StyledTag fontSize='12px' p='5px 10px' bg='#5C7F92' color='white'borderRadius='86px' mr='5px'>Skill Tag</StyledTag>
                </Flex>
            </Flex>
        </StyledCard>
    )
}
export default ProjectCard;