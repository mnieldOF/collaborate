import React from 'react';
import { Flex, StyledImg, TextStyled, Box, Heading, DefaultButton, LinkStyled, Container } from '@openfrequency/component-library';
import { StatusBar, ProjectCard, ScrollSlider, Footer, ImageTitleText, TitleTextButton } from '../components';
import logo from '@openfrequency/component-library/src/images/collaborate-small-logo.svg'; 
import LargeLogo from '@openfrequency/component-library/src/images/collaborate-large-logo.svg';
import LogoAlt from '@openfrequency/component-library/src/images/collaborate-small-logo-variation.svg';
import EarnImg from '@openfrequency/component-library/src/images/Earn.svg';
import GrowImg from '@openfrequency/component-library/src/images/Grow.svg';
import LiveImg from '@openfrequency/component-library/src/images/Live.svg';

const Home = () => {

    return(
        <>  
          <StatusBar text='• Company A has a need for skill-set' />
          <Flex py='30px' flexDirection='column' alignItems='center' bg='#E17000'>
            <StyledImg src={LargeLogo} mb='27px' />
            <TextStyled color='#17324A' my={0} fontSize={5}>Earn - Grow - Live</TextStyled>
          </Flex>
          <Box p='15px' bg='#17324A'>
            <Flex justifyContent='center' alignItems='center'>
              <DefaultButton 
                uppercase
                bg='#5C7F92' 
                color='white'
                flex='1'
              >
                Resources
              </DefaultButton>
              <DefaultButton 
                uppercase
                flex='1'
                bg='#5C7F92' 
                color='white'
                ml='10px'
              >
                Opportunities
              </DefaultButton>
            </Flex>
          </Box>

          <ScrollSlider title='Featured projects' my='20px'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </ScrollSlider>

          <Box>
            <Container>
              <TextStyled as='h5' color='black' fontSize='24px' textAlign='center'>
                Collaborate lets you easily grow your business or get rewarded for your skills and assets through the exchange of stakes and shares.
              </TextStyled> 
            </Container>
          </Box>

          <ImageTitleText 
            icon='Earn' 
            title='Earn' 
            text='Get rewarded for your skills by taking a stake in a business; make your business ideas reality by inviting in missing talent and assets.'
          /> 
          <ImageTitleText 
            icon='Grow' 
            title='Grow' 
            text='Develop your interests, monetise spare capacity and diversify your day/week by collaborating with a wide range of like-minded entrepreneurial individuals.'
          /> 
          <ImageTitleText 
            icon='Live' 
            title='Live' 
            text='You’re unique, expand your horizons, unleash your talents.'
          /> 
          <DefaultButton 
              uppercase
              bg='#5C7F92' 
              color='white'
              width='100%'
            >
            Start collaborating now
          </DefaultButton>
          
          <TitleTextButton
            title='Become a collaborator'
            text='Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, community vel illum dolore eu feugiat nulla facilisis at vero eros et ethical accumsan et iusto odio professional dignissim qui blandit
            praesent luptatum mutual delenit augue duis feugait nulla facilisi.'
            titleSize='34px'
            textAlign='center'
          />
          <TitleTextButton
            title='Posting an opportunity'
            text='Lorem ipsum dolor sit amet, shared values conse tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.'
            titleSize='24px'
            textAlign='center'
          />          

            <Heading as='h5' color='#17324A' fontSize='24px' my={3}>Posting an opportunity</Heading>   
            <TextStyled color='#5C7F92' my={0}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, community vel illum dolore eu feugiat nulla facilisis at vero eros et ethical accumsan et iusto odio professional dignissim qui blandit
      praesent luptatum mutual delenit augue duis feugait nulla facilisi.</TextStyled> 
            <DefaultButton 
                uppercase
                bg='#5C7F92' 
                color='white'
              >
              Post an opportunity
            </DefaultButton>
          <Footer />

</>
    )
   
}

export default Home;