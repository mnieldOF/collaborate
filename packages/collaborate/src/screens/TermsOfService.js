import React from 'react';
import { Heading, TextStyled, DefaultButton} from '@openfrequency/component-library';

const TermsOfService = () => {
    return(
        <>
            <Heading >Terms of Service</Heading>
            <TextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem sed mi quisque amet consectetur. Semper condimentum magnis nunc malesuada. Amet morbi feugiat netus aenean etiam sem non. Nunc mi vitae, faucibus integer pellentesque non sed. Enim sodales eu vitae senectus. Nulla placerat cursus in urna, nisi. Dui arcu non habitant nam. Tincidunt vitae, leo phasellus at nulla libero facilisis sem auctor.
            </TextStyled>
            <DefaultButton 
                uppercase
                bg='#17324A' 
                color='white'
                href='/login'
                as='a'
            >
                    Accept & Create Account
            </DefaultButton>
            <DefaultButton 
                uppercase
                bg='transparent' 
                color='#5C7F92'
                border='1px solid #5C7F92'
                href='/create-account'
                as='a'
            >
                Decline & Cancel Sign Up
            </DefaultButton>
        </>
    )
}

export default TermsOfService