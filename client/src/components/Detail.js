import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = async (formdata) => {
        try {
          const response = await axios.post('http://localhost:3453/food/donate',formdata);
        //   console.log(response.data)
        toast.success(response.data.message,
        {
            theme:'light',
            autoClose: 2000,
        })
        // setTimeout(() => {
        // }, 1000);

        } 
        catch (err) {
            console.log(err);
         if (err.response.status == 400) 
         {
            toast.error(err.response.data.message, {
                autoClose: 2000,
                theme:'light',
            });
            return;
        } 
        else {
            toast.error(err.response.statusText
            ,
            {
                autoClose:2000,
                theme:'light'
            });
            return;
        }
        }
      };

    return (
        <div>
            <div className="Header">
                <h3>Your contact details</h3><br></br>
                <div>
                    <form className="ui form" onSubmit={handleSubmit(onSubmit)}> 
                        <h4 className="ui dividing header">Personal Information</h4>
                        <div className="two fields">
                            <div className="field">
                                <label>First Name</label>
                                <input
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
              style={{ borderColor: 'black' }}
              {...register('firstName', {
                required: 'First Name is required',
                pattern: {
                  value: /^[^\d].*/,
                  message: 'First Name should not start with a digit',
                },
              })}
            />
            {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
                             
               
                              
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input
              type="text"
              name="shipping[last-name]"
              placeholder="Last Name"
              style={{ borderColor: 'black' }}
              {...register('lastName', {
                required: 'Last Name is required',
                pattern: {
                  value: /^[^\d].*/,
                  message: 'Last Name should not start with a digit',
                },
              })}
            />
            {errors.lastName && <p className='error-message'>{errors.lastName.message}</p>}
                            </div>
                        </div>




                        <div className="two fields">
                        <div className="twelve wide field">
                          <label>Address</label>
                                <input
              type="text"
              name="shipping[address]"
              placeholder="Street Address"
              style={{ borderColor: 'black' }}
              {...register('address', {
                required: 'Address is required',
              })}
            />
            {errors.address && <p className='error-message'>{errors.address.message}</p>}
                                </div>
                                <div className="four wide field">
                                  <label>City</label>
                                <input
              type="text"
              name="shipping[address-2]"
              placeholder="City"
              style={{ borderColor: 'black' }}
              {...register('city', {
                required: 'City is required',
              })}
            />
            {errors.city && <p className='error-message'>{errors.city.message}</p>}
                                </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>State</label>
                                <select className="ui fluid dropdown"
            style={{ borderColor: 'black' }}
            {...register('state', { required: 'State is required' })}>
                                    <option value="">State</option>
                                    <option value="AR">Arunachal Pradesh</option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="AS">Assam</option>
                                    <option value="Bi">Bihar</option>
                                    <option value="ch">Chattisgarh</option>
                                    <option value="GO">Goa</option>
                                    <option value="Gu">Gujarat</option>
                                    <option value="ha">Haryana</option>
                                    <option value="He">Himachal Pradesh</option>
                                    <option value="Jh">Jharkhand</option>
                                    <option value="Ma">Maharastra</option>
                                    <option value="Na">Nagaland</option>
                                    <option value="pu">Punjab</option>
                                    <option value="Si">Sikkim</option>
                                    <option value="Tm">Tamil Nadu</option>
                                    <option value="Te">Telangana</option>
                                    <option value="ut">Uttarakhand</option>
                                    <option value="Wb">West Bengal</option>
                                </select>
                                {errors.state && <p className='error-message'>{errors.state.message}</p>}
                            </div>
                            <div className="field">
                                <label>Country</label>
                                <select  className="ui fluid dropdown"
            style={{ borderColor: 'black' }}
            {...register('country', { required: 'Country is required' })}>
                                    <option value="">Country</option>
                                    <option value="af">Afghanistan</option>
                                    <option value="Ax">Aland Islands</option>
                                    <option value="Al">Albania</option>
                                    <option value="Au">Australia</option>
                                    <option value="As">Austria</option>
                                    <option value="Ba">Bahamas</option>
                                    <option value="be">Beligium</option>
                                    <option value="bt">Bhutan</option>
                                    <option value="bz">Brazil</option>
                                    <option value="kh">Cambodia</option>
                                    <option value="ca">Canada</option>
                                    <option value="co">Congo</option>
                                    <option value="cu">cuba</option>
                                    <option value="dk">Denmark</option>
                                    <option value="fr">France</option>
                                    <option value="ge">Germany</option>
                                    <option value="hk">Hong Kong</option>
                                    <option value="hu">Hungary</option>
                                    <option value="is">Iceland</option>
                                    <option value="IND">India</option>
                                    <option value="JAP">Japan</option>
                                    <option value="ke">Kenya</option>
                                    <option value="li">Libya</option>
                                    <option value="My">Malaysia</option>
                                    <option value="Mv">Maldhives</option>
                                    <option value="za">South Africa</option>
                                    <option value="kr">South Korea</option>
                                    <option value="sz">Switzerland</option>
                                    <option value="Tu">Turkey</option>
                                    <option value="ua">Ukraine</option>
                                    <option value="uae">United Arab Emirates</option>
                                    <option value="USA">United States of America</option>
                                    <option value="vn">Vietnam</option>
                                    <option value="zw">Zimbabwe</option>
                                </select>
                                {errors.country && <p className='error-message'>{errors.country.message}</p>}
                            </div>
                        </div>




                        <div className="two fields">
                            <div className="field">
                                <label>Phone Number</label>
                                <div className="ui labeled input">
                    <div className="ui label">
                        +91
                    </div>
                    <input
          type="text"
          style={{ borderColor: 'black' }}
          placeholder="Phone number"
          {...register('phoneno', {
            required: 'Phone number is required',
            pattern: {
              value: /^[1-9]\d{9}$/,
              message: 'Invalid phone number format (10 digits, no leading 0)',
            },
          })}
        />
                </div>
                {errors.phoneno && <p className='error-message'>{errors.phoneno.message}</p>}
                              
                            </div>
                            <div className="field">
                                <label>Food Sufficiency:</label>
                                <div className="ui right labeled input">
                <input
          type="text"
          placeholder="Food sufficient for.."
          style={{ borderColor: 'black' }}
          {...register('peopleCount', {
            required: 'Number of people is required',
          })}
        />
                    <div className="ui basic label" style={{ borderColor: 'black' }}>
                        in persons
                    </div>
                </div>
                {errors.peopleCount && <p className='error-message'>{errors.peopleCount.message}</p>}
                            </div>
                        </div>
                <div className="ui toggle checkbox">
                    <input type="checkbox" name="public" style={{ borderColor: 'black' }}
                    {...register('acceptTerms', {
                        required: 'Please agree to the terms',
                      })}
                    />
                    <label >We are happy with our donation</label>
                </div>
                {errors.acceptTerms && <span className='error-message'>      {errors.acceptTerms.message}</span>}
                <br></br><br></br>
                <button className="ui primary button" type='submit'>
                    Donate</button>
                    <ToastContainer/>

                    </form>
                    


                </div>
               
                   
            </div>

        </div>
    );
};

export default Details;