
import React from 'react';
import Details from './Detail';
import Contact from './Contact';

const Donar = () => {

    return (
        <>
                <div className='donar-poster'>  
                <div className="donar-poster-content">
                <div>We really appreciate your Efforts.<br></br>
                Every donation provides nutritious food for Hungry children and families.</div>
                </div> </div>             
                <Details/>
                <Contact/>
        </>
    );
};

export default Donar;