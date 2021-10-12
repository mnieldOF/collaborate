import React from 'react'
import ResponseFullScreen from '../components/ResponseFullScreen';


const SuccessfullyReset = () => {
    return(
        <ResponseFullScreen
            bg='#5c7f92'
            title='Successfully reset'
        >
            Your password has been reset. Click below to sign in with your new password.
        </ResponseFullScreen>
    )
}

export default SuccessfullyReset;