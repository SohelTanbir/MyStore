import React, { useContext } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebase.config';
import { faFacebookSquare, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // login with google account
    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedUser = {name:user.displayName, email:user.email,photo:user.photoURL}
                setLoggedInUser(loggedUser)
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.email;
    });
}
 // login with Facebook
 const handleFacebookLogin = ()=>{
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    alert("login with facebook")
    firebase
  .auth()
  .signInWithPopup(facebookProvider)
  .then((result) => {
    const user = result.user;
    const loggedUser = {name:user.displayName, email:user.email,photo:user.photoURL}
    setLoggedInUser(loggedUser);
  })
  .catch((error) => {
    const errorMessage = error.message;
    const email = error.email;

  });
 }
    return (
        <div className="login">
            <h3>User: {loggedInUser.name}</h3>
            <div className="container">
                <div className="loginBox">
                    <h3>Login</h3>
                    <div className="inputBox">
                        <input type="email" placeholder="Enter E-mail"/> <br />
                        <input type="password" placeholder="Password"/> <br />
                        <button className="loginBtn">
                        <FontAwesomeIcon icon={faUser} /><span>Login Now</span></button>
                    </div>
                    <div className="loginOption">
                        <h4>Sign Up With</h4>
                      <button onClick={handleFacebookLogin} className="facebook"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</button>
                       <button onClick={handleGoogleLogin} className="google"><FontAwesomeIcon icon={faGoogle} /> Google</button>
                       <Link to="/signup">Don't have an Account? Create now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;