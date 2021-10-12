import React from 'react';
import { StatusBar, SearchBox, ScrollSlider, ProjectCard, ProvisionerCard, ProviderCard, Footer } from '../components';

const AuthHome = () => {
    return(
        <>        
            <StatusBar 
                text='• Company A has a need for skill-set B • Provider E has the skill-set F • Company C has a requirement for Skill-set D • Provider G has' 
            />
            <SearchBox value='What are you looking for?' />
            <ScrollSlider title='Featured projects' mb='20px'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ScrollSlider>
            <ScrollSlider title='New projects' mb='20px'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ScrollSlider>
            <ScrollSlider title='Featured Providers' mb='20px'>
                <ProviderCard />
                <ProviderCard />
                <ProviderCard />
                <ProviderCard />
                <ProviderCard />
            </ScrollSlider>              
            <ScrollSlider title='Featured Providers' mb='20px'>
                <ProvisionerCard />
                <ProvisionerCard />
                <ProvisionerCard />
                <ProvisionerCard />
                <ProvisionerCard />
            </ScrollSlider>    
            <Footer />        
        </>
    )
}

export default AuthHome;