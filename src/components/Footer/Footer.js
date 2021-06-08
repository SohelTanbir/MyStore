import React from 'react';
import './Footer.css'
import paymentMethod from '../../images/payment-getway.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="single-footer">
                        <h3>Recent products</h3>
                        <ul>
                            <li>Female collection</li>
                            <li>Male collection</li>
                            <li>Brand product</li>
                            <li>Latest Brand</li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h3>popular blog</h3>
                        <ul>
                            <li>New Blog</li>
                            <li>most read</li>
                            <li>latest blog</li>
                            <li>winter collection</li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h3>Best Selling </h3>
                        <ul>
                            <li>Male production</li>
                            <li>Female collection</li>
                            <li>Winter cloth</li>
                            <li>summer cloth</li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h3>Payment with</h3>
                        <div className="row">
                            <img src={paymentMethod} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;