import React from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import { faFacebookSquare, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const SignUp = ()=>{
    return(
        <div className="SignUp">
        <div className="container">
            <div className="SignUpBox">
                <h3>Sign Up</h3>
                <div className="inputBox">
                    <input type="text" placeholder="Your Name"/> <br />
                    <input type="email" placeholder="Enter E-mail"/> <br />
                    <input type="password" placeholder="Password"/> <br />
                    <button className="loginBtn">
                    <FontAwesomeIcon icon={faUser} /><span>Create Account</span></button>
                </div>
                <div className="loginOption">
                   <Link to="/login">Have an Account? Login now</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;