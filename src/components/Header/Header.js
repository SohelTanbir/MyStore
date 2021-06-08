import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleMenu = ()=>{
        if(toggle === false){
           document.querySelector('.navbar ul').style.visibility ='visible';
           document.querySelector('.navbar ul').style.left ='0%';
           setToggle(true)
        }else{
            document.querySelector('.navbar ul').style.visibility ='hidden';
            document.querySelector('.navbar ul').style.left ='-100%';
           setToggle(false)
        }
    }
    return (
       <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logo">
                       <a href="/home">MyStore</a>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                            <li>
                                <Link to="/product">Collection</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/admin">admin</Link>
                            </li>
                        </ul>
                        <div id="mobileMenu">
                            <a href="#" onClick={handleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                            </a>
                     </div>
                    </div>
                    <div className="addToCart">
                        <a href="#">
                        <FontAwesomeIcon icon={faCartPlus} />
                        </a>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Header;