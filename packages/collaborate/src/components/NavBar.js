import React from 'react';
import { Flex, Icon, DefaultButton } from '@openfrequency/component-library';

const NavBar = ({ login, showNav, setShowNav}) => {

    return(
        <Flex bg='white' alignItems='center' p='15px' zIndex='11'>
            <Icon 
                icon='collaborate-small-logo'
                alt="logo" 
                width='30px'
            />
            {
                login ? (
                    <Flex ml='auto' alignItems='center'>
                        <DefaultButton 
                            uppercase
                            bg='transparent' 
                            color='#5C7F92'
                            border='1px solid #5C7F92'
                            href='/login'
                            as='a'
                        >
                            login
                        </DefaultButton>
                        <DefaultButton 
                            uppercase
                            bg='#E17000' 
                            color='white'
                            ml='10px'
                            href='/create-account'
                            as='a'
                        >
                            register
                        </DefaultButton>
                    </Flex>
                )
                : (
                    <Icon 
                        icon={showNav ? 'close-o' : 'menu'} 
                        width='30px' 
                        ml='auto' 
                        color='#5C7F92'
                        onClick={() => setShowNav(!showNav)} 
                        zIndex='10'
                    />
                )
            }

        </Flex>
    )
}

export default NavBar;