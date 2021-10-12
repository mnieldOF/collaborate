import React from 'react';
import { Heading } from '@openfrequency/component-library';
import AccountTypeCard from '../components/AccountTypeCard';

const AccountType = () => {
    return(
        <>
            <Heading color='#5C7F92' my='30px' textAlign='center'>Tell us who you are</Heading>
            <AccountTypeCard 
                icon='Provisioner'
                buttonText='this is me' 
                title='Provisioner'
                btnColor='#5C7F92'
                titleColor='#E17000'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </AccountTypeCard>
            <AccountTypeCard 
                icon='Provider'
                width='30%'
                buttonText='this is me' 
                title='Provider'
                btnColor='#E17000'
                titleColor='#5C7F92'
                mt='15px'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </AccountTypeCard>   
        </>     
    )
}

export default AccountType;