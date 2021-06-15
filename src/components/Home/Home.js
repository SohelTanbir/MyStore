import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import LatestNews from '../LatestNews/LatestNews';
import Product from '../Product/Product';
import Service from '../Service/Service';
import StripePayment from '../StripePayment/StripePayment';


const Home = ()=> {
    return (
        <div className="home">
           <Banner/>
           <Service/>
           <Product/>
           <LatestNews/>
           <Blog/>
           <Footer/>
           <StripePayment/>
        </div>
    )
}

export default Home;