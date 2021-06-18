import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [cart, setCart] = useContext(userContext)
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
                       <a href="/home">My<span>Store</span> </a>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a href="#product">Product</a>
                            </li>
                            <li>
                                <a href="#blog">Blog</a>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <a href="#about">About Us</a>
                            </li>
                        </ul>
                        <div id="mobileMenu">
                            <a href="#" onClick={handleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                            </a>
                     </div>
                    </div>
                    <div className="addToCart" data={cart}>
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