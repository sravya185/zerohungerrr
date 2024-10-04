import React from 'react';
import Poster from './Poster';
import Content from './Content';
import Causes from './Causes'
import Blog from './Blog';
import Footer from './Footer';


const Home = () => {
    return (
        <div>
            <Poster />
            <Content />
            <Causes />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;