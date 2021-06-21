import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
     const signIn = e => {
         e.preventDefault(); 
         auth.signInWithPopup(provider).catch(error => 
         alert(error.message));
     };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/91f64896-759a-41ae-8d14-d540f90c5870.png" alt="" />
                <h1>Sign in to Afro Fam</h1>
                <p>afro.slack.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
     background-color: #f8f8f8;
     height: 100vh;
     display: grid;
     place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.124);

    > img {
        object-fit: contain;
        height: 100px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: #fff;
    }
`;
