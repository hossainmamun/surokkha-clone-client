import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { globalUser } from '../../App.js';

firebase.initializeApp(firebaseConfig)

const Account = () => {
    const [loggedInUser, setLoggedInUser] = useContext(globalUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signInUser);
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', marginBottom: '300px' }}>
            <div className='mt-5 text-center'>
                <h3>Login With Google</h3>
                <button className="btn btn-dark btn-block py-2 text-capitalize mt-4 px-3" onClick={handleGoogleSignIn}>continue with google</button>
            </div>
        </div>
    );
};

export default Account;