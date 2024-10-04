import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import './Take.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'


// const Modal = ({ isOpen, closeModal,selectedCity,locations}) => {
//     if (!isOpen) return null;
//     const deleteNeedy =(needy_id)=>
//     {
        
//       axios.delete(`http://localhost:3453/food/deleteNeedy/${needy_id}`)
//       .then(response => {
//         toast.success(response.data.message,{
//           theme:'light',
//           autoClose:2000,
//         })


//         const updatedLocations = foodneedinvolunteerlocation.filter(location => location._id !== needy_id);
//         setfoodneedinvolunteerlocation(updatedLocations);


        
//       })
//       .catch(error => {
//         if(error.response.status==404 || error.response.status == 501)
//         {
//           toast.error(error.response.data.message,
//             {
//               theme:'light',
//               autoClose:2000,
//             })
//         }
//         else{
//           toast.error(error.response.statusText,
//             {
//               theme:'light',
//               autoClose:2000,
//             })
//         }
        
//       });
//     }
//     return (
//       <div className="modal-overlay">
//       <div className="modal">
//         <span className="close" onClick={closeModal}>&times;</span>
//         <h2>Details of Needy in {selectedCity}</h2>
//         {locations.map((location, index) => (
//           <div key={index} className="location-details">
//             <div>
//               <h3>Needy {index + 1}</h3>
//               <p>Name: {location.name}</p>
//               <p>Address: {location.address}</p>
//               <p>State:{location.state}</p>
//               <div style={{ display: 'flex',justifyContent:'space-between'}}>
//               <p>Phone No: {location.phoneno}</p>
//                 <button    onClick={() => { deleteNeedy(location._id) }}>Delete</button>
//                 <ToastContainer/>
//               </div>
           
//            </div> 
//       </div>
//         ))}
//       </div>
//     </div>
    

//     );
//   };


const TakeFood = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {register,handleSubmit,formState:{errors}} = useForm();
      const [foodneedinvolunteerlocation,setfoodneedinvolunteerlocation] = useState([])
      const [foodneededcities,setfoodneededcities] = useState([])
      const [city,setCity] = useState('');
      const [showLocations,setShowLocations]=useState(false);
      const [del,setDelete] = useState(false);


      const Modal = ({ isOpen, closeModal,selectedCity,locations}) => {
        if (!isOpen) return null;
        const deleteNeedy =(needy_id)=>
        {
            
          axios.delete(`http://localhost:3453/food/deleteNeedy/${needy_id}`)
          .then(response => {
            toast.success(response.data.message,{
              theme:'light',
              autoClose:1000,
            })
    
    
           setTimeout(()=>{ const updatedLocations = foodneedinvolunteerlocation.filter(location => location._id !== needy_id);
            // if(updatedLocations.length==0)  closeModal();
            setfoodneedinvolunteerlocation(updatedLocations)
            if(updatedLocations.length==0)  closeModal();
          },1000)
    
            
          })
          .catch(error => {
            if(error.response.status==404 || error.response.status == 501)
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
            <h2>Details of Needy in {selectedCity}</h2>
            {locations.map((location, index) => (
              <div key={index} className="location-details">
                <div>
                  <h3>Needy {index + 1}</h3>
                  <p>Name: {location.name}</p>
                  <p>Address: {location.address}</p>
                  <p>State:{location.state}</p>
                  <div style={{ display: 'flex',justifyContent:'space-between'}}>
                  <p>Phone No: {location.phoneno}</p>
                    <button    onClick={() => { deleteNeedy(location._id) }}>Delete</button>
                    <ToastContainer/>
                  </div>
               
               </div> 
          </div>
            ))}
          </div>
        </div>
        
    
        );
      };
  
      const orderCities=(cities)=>
      {
        const capitalizeWords = (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
         const uniqueCities = [...new Set(cities)];
          uniqueCities.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
          return uniqueCities.map(capitalizeWords)   
      }
  
      const addfoodneededcities = async (foodavailablelocations) => {
          const cities = foodavailablelocations.map((location) => {
              return location.city;
          });
          setfoodneededcities(orderCities(cities));
      };
  
  
    const [filteredLocations, setfilteredLocations] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      const userInput = e.target.value.toLowerCase();
      setInputValue(e.target.value);
  
      if (!userInput) {
        setfilteredLocations([]);
        setfoodneedinvolunteerlocation([]);
        setShowLocations(false)
        setShowModal(false)
        return;
      }
      const matchingLocations = foodneededcities.filter(city =>
        city.toLowerCase().startsWith(userInput)
      )
      // console.log(matchingLocations)
      setfilteredLocations(matchingLocations);
    };

    useEffect(()=>{

                axios.get('http://localhost:3453/food/getneededlocations')
                .then(response=>{
                    // console.log(response.data.foodneededlocations)
                    // setFoodavailablelocations(response.data.foodavailablelocations);
                    addfoodneededcities(response.data.foodneededlocations)
        
                })
                .catch(err=>{console.error(err)})
               
            },foodneedinvolunteerlocation)

  const handleSelect = (city) => {
    axios.post('http://localhost:3453/food/getAdressesOfFoodNeededLocations', { city })
      .then(response => {
        setfoodneedinvolunteerlocation(response.data.matchingLocations);
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
      <h2>GIVE FOOD</h2>
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
                  {/* {!showModal? (foodneededcities.map((item,index)=>{
                    return(
                                <div key={index}>
                                    <p>{item}</p>
                                </div>
                    )
                  
                }))
                
                :  
                
                <Modal
        isOpen={showModal}
        closeModal={closeModal}
        selectedCity={selectedCity}
        locations={foodneedinvolunteerlocation}
      />
                } */}


                {(foodneededcities.map((item,index)=>{
                    return(
                                <div key={index}>
                                    <p>{item}</p>
                                </div>
                    )
                  
                }))}

                {showModal && 
                 <Modal
                 isOpen={showModal}
                 closeModal={closeModal}
                 selectedCity={selectedCity}
                 locations={foodneedinvolunteerlocation}
               />
                }
            </div>   

      


    </div>
  );
};

export default TakeFood;

