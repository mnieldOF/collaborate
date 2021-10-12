import React from 'react';
import ResponseFullScreen from '../components/ResponseFullScreen';

const CheckYourInbox = () => {
    return(
        <ResponseFullScreen
            bg='#5c7f92'
            title='Check your inbox'
        >
            We’ve sent you a magic link to reset your password. If you didn’t recieve anything press the button below to resend.
        </ResponseFullScreen>
    )
}

export default CheckYourInbox;
