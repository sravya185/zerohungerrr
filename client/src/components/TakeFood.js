import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import './Take.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'

const Modal = ({ isOpen, closeModal,selectedCity,locations}) => {
    if (!isOpen) return null;
    const deleteDonar =(donar_id)=>
    {
      axios.delete(`http://localhost:3453/food/deleteDonar/${donar_id}`)
      .then(response => {
        toast.success(response.data.message,
          {
            theme:'light',
            autoClose:2000,
          })
      })
      .catch(error => {
        if(error.response.status==404 || error.response.status==501)
        {
          toast.error(error.response.data.message,
            {
              theme:'light',
              autoClose:2000,
            })
          
        }
       
        else{
          toast.error(error.response.statusText,
            {
              theme:'light',
              autoClose:2000,
            })
        }
      });
    }
  
    return (
      <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Details of Donars in {selectedCity}</h2>
        {locations.map((location, index) => (
          <div key={index} className="location-details">
            <div>
              <h3>Donar {index + 1}</h3>
              <p>Name: {location.name}</p>
              <p>Address: {location.address}</p>
              <p>State:{location.state}</p>
              <p>Phone No: {location.phoneno}</p>
              <div style={{ display: 'flex',justifyContent:'space-between'}}>
              <p>Food Sufficiency: {location.peoplecount} people</p>
                <button    onClick={() => { deleteDonar(location._id) }}>Delete</button>
                <ToastContainer/>

              </div>
           
           </div> 
      </div>
        ))}
      </div>
    </div>
    

    );
  };


const TakeFood = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {register,handleSubmit,formState:{errors}} = useForm();
      const [foodavailabilityinvolunteerlocation,setfoodavailabilityinvolunteerlocation] = useState([])
      const [foodavailablecities,setFoodavailableCities] = useState([])
      const [city,setCity] = useState('');
      const [showLocations,setShowLocations]=useState(false);
  
  
      const orderCities=(cities)=>
      {
        const capitalizeWords = (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
         const uniqueCities = [...new Set(cities)];
          uniqueCities.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
          return uniqueCities.map(capitalizeWords)   
      }


      const addFoodavailablecities = async (foodavailablelocations) => {
          const cities = foodavailablelocations.map((location) => {
              return location.city;
          });
          setFoodavailableCities(orderCities(cities))
      };
  
  
    const [filteredLocations, setfilteredLocations] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      const userInput = e.target.value.toLowerCase();
      setInputValue(e.target.value);
  
      if (!userInput) {
        setfilteredLocations([]);
        setfoodavailabilityinvolunteerlocation([]);
        setShowLocations(false)
        setShowModal(false)
        return;
      }
      const matchingLocations = foodavailablecities.filter(city =>
        city.toLowerCase().startsWith(userInput)
      )
      // console.log(matchingLocations)
      setfilteredLocations(matchingLocations);
    };

    useEffect(()=>{

                axios.get('http://localhost:3453/food/getavailablelocations')
                .then(response=>{
                    // console.log(response.data.foodavailablelocations)
                    // setFoodavailablelocations(response.data.foodavailablelocations);
                    addFoodavailablecities(response.data.foodavailablelocations)
        
                })
                .catch(err=>{console.error(err)})
               
            },[])

  const handleSelect = (city) => {
    axios.post('http://localhost:3453/food/getAdressesOfFoodAvailableLocations', { city })
      .then(response => {
        setfoodavailabilityinvolunteerlocation(response.data.matchingLocations);
        setInputValue(city)
        setfilteredLocations([]); 
        setSelectedCity(city);
        setShowModal(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
    setInputValue('')
  };

  return (
    <div>
      <h2>TAKE FOOD</h2>
      <div style={{ position: 'relative' }}>
     <input
        type="text"
        placeholder="Type a city..."
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: '8px', fontSize: '16px', width: '200px' } }
      />
      {filteredLocations.length > 0 && (
        <div
          className="dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
            minWidth: '200px',
          }}
        >
          {filteredLocations.map((location, index) => (
            <div
              key={index}
              onClick={() => handleSelect(location)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: index !== filteredLocations.length - 1 ? '1px solid #ccc' : 'none',
              }}
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>   
    <div style={{marginTop:'1rem'}}>
                  {!showModal?  (foodavailablecities.map((item,index)=>{
                    return(
                                <div key={index}>
                                    <p>{item}</p>
                                </div>
                    )
                }))  :  
                
                <Modal
        isOpen={showModal}
        closeModal={closeModal}
        selectedCity={selectedCity}
        locations={foodavailabilityinvolunteerlocation}
      />
                }
            </div>   

      


    </div>
  );
};

export default TakeFood;

