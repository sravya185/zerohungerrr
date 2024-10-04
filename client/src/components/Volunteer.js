import React from 'react';
import axios from 'axios';
import { useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import TakeFood from './TakeFood';
import GiveFood from './GiveFood'
const Volunteer = () => {
    const [data,setData] = useState('');
    // const [location,setLocation] = useState(null);

    const {register,handleSubmit,formState:{errors}} = useForm()
    // const {register2,handleSubmit2,formState:{errors2}} = useForm()

    let url;
    const onchange = (input) =>{
        setData(input.City);
    };
    //getting data and storing in a variable

    
    
    return (
        <div  className='volunteer'>
        <div className='volunteer-details'>

            <TakeFood/>
            {/* {location?
                <div className="Location">
                    <iframe src={url} frameBorder={0}></iframe>
                    <p>Here there is a food availability in this Location</p>
                    <button>Contant Us</button>
                </div> : <div>data not found</div>            
            }  */}
        </div>
        <div className='volunteer-details'> 
        <GiveFood/>           
        </div>
        </div>
    );
};

export default Volunteer;