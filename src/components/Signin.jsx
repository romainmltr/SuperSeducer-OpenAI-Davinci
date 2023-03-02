import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

function Signin() {
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const { googleSignIn } = UserAuth();

    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-8'>This is a beta if you want to be inform of the news sign <br>
                with Google</br> </h1>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={ handleGoogleSignIn } />
            </div>
        </div>
    );
};

export default Signin;