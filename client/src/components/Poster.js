import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Poster = () => {
    const navigate = useNavigate()
    return (
        <div className='poster'>  
        <div className="poster-content">
            <button onClick={()=>{navigate('NeedFood')}}>TAKE FOOD</button>
            <button onClick={()=>{navigate('Donar')}}>DONATE FOOD</button>
        </div>              
        </div>
    );
};

export default Poster;