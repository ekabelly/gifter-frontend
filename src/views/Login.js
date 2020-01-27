import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase';
import i18n from '../i18n';
import * as firebaseui from 'firebaseui';
import '../assets/style/firebaseui.scss';
import {
    useHistory
  } from "react-router-dom";

function Login(props) {
    let history = useHistory()

    const login = () => {
        if(!props.user.token){
        const provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: 'select_account'
            });
            const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', {
                callbacks: {
                    signInSuccessWithAuthResult: authResult => {
                        console.log('user login successful!', authResult);
                        props.login({ 
                            name: authResult.user.displayName, 
                            email: authResult.user.email, 
                            token:  authResult.user.refreshToken
                        });
                        history.push('/store');
                        return false;
                    },
                    uiShown: function() {
                        // The widget is rendered.
                        // Hide the loader.
                        document.getElementById('loader').style.display = 'none';
                    }
                },
                // signInSuccessUrl: 'localhost:8080/',
                signInOptions: [
                    // List of OAuth providers supported.
                    {
                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                        scopes: [
                            'https://www.googleapis.com/auth/contacts.readonly'
                        ],
                        costumParameters: {
                            prompt: 'select_account'
                        }
                    }
                ]
                // Other config options...
            });
        } else {
            console.log('already logged in!');
            history.push('/store');
        }
    }

    
    useEffect(login);

    return (
        <div className="login">
            
        <div id="firebaseui-auth-container" className="flex flex-column align-center justify-center">
            <div className="login">
                { i18n('login') }
                {/* <img src="@/assets/img/logo.png" alt="" /> */}
            </div>
        </div>
        <div id="loader"></div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userData
})

// { name: user.name, email: user.email, profilePic: user.profilePic }
const mapDispatchToProps = dispatch => ({
    login: user => dispatch({ type: 'LOGIN', payload: user })
})



export default connect(mapStateToProps, mapDispatchToProps)(Login)

