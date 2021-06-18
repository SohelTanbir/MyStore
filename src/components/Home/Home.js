import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import Product from '../Product/Product';
import Service from '../Service/Service';


const Home = ()=> {
    return (
        <div className="home">
            <Header/>
           <Banner/>
           <Service/>
           <Product/>
           <LatestNews/>
           <Blog/>
           <Footer/>
        </div>
    )
}

export default Home;