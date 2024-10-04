import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import Contact from './Contact';

const Register = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (formdata) => {
        // console.log(formdata)
        try {
          const response = await axios.post('http://localhost:3453/volunteer/register',formdata);
          toast.success(response.data.message,{
            theme:'light',
            autoClose:2000,
          });
     
        } 
         catch (err) {
            if (err.response.status == 400 || err.response.status == 409 || err.response.status == 501) 
            {
               toast.error(err.response.data.message, {
                   autoClose: 2000,
                   theme:'light',
               });
               return;
           } 
           else{
            toast.error(err.response.statusText,{
                autoClose:2000,
                theme:'light'
            });
            return;
           }
       }
      };


    return (
        <div>
            <div className="Header" style={{marginBottom:'60px',}}>
                <p>Registration</p>
                <div className="division">
                    {/* <form className="ui form segment" onSubmit={handleSubmit(onSubmit)}>
                        <div className="two fields">
                            <div className="field">
                                <label>Username</label>
                                <input placeholder="Username" name="name" type="text"  {...register('username', { required: true })}/>
                            </div>
                            <div className="field">
                                <label>Phone number</label>
                                <input placeholder="Phone number" name="phone number" type="text" {...register('phoneno', { required: true })}/>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>E-mail</label>
                                <input placeholder="E-mail" name="E-mail" type="text"  {...register('email', { required: true })}/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input name="password" type="password" placeholder="Password" {...register('password', { required: true })}/>
                            </div>
                        </div>
                        
                        <div className="inline field">
                            <div className="ui checkbox">
                                <input name="terms" type="checkbox"  />
                                <label>I agree to the terms and conditions</label>
                            </div>
                        </div>
                        <input className="ui primary submit button" type="submit" value="submit"/>
                        <ToastContainer/>
                    </form> */}
                     <form className="ui form segment" onSubmit={handleSubmit(onSubmit)}>
      <div className="two fields">
        <div className="field">
          <label>Username</label>
          <input
            placeholder="Username"
            name="username"
            type="text"
            {...register('username', {
              required: 'Username is required',
              pattern: {
                // value: /^[a-zA-Z][a-zA-Z0-9]*$/,
                value: /^[^\d].*/,
                message: 'Username must not start with a digit',
              },
            })}
          />
          {errors.username && <p className='error-message'>{errors.username.message}</p>}
        </div>
        <div className="field">
          <label>Phone number</label>
          <input
            placeholder="Phone number"
            name="phoneno"
            type="text"
            {...register('phoneno', {
              required: 'Phone number is required',
              pattern: {
                value: /^[1-9]\d{9}$/,
                message: 'Invalid phone number format (10 digits, no leading 0)',
              },
            })}
          />
          {errors.phoneno && <p className='error-message'> {errors.phoneno.message}</p>}
        </div>
      </div>
      <div className="two fields">
        <div className="field">
          <label>E-mail</label>
          <input
            placeholder="E-mail"
            name="email"
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className='error-message'>{errors.email.message}</p>}
        </div>
        <div className="field">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};':"|,.<>?]).*$/,
                message: 'Password must contain at least one uppercase letter, one lowercase letter, and one special character',
              },
            })}
          />
          {errors.password && <p className='error-message'>{errors.password.message}</p>}
        </div>
      </div>
      
      <div className="inline field">
        <div className="ui checkbox">
          <input name="terms" type="checkbox" {...register('terms', { required: 'Please agree to terms' })} />
          <label>I agree to the terms and conditions</label>
        </div>
      </div>
      {errors.terms && <p  className='error-message'>{errors.terms.message}</p>}
      <input className="ui primary submit button" type="submit" value="Submit" />
      <ToastContainer />
    </form>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Register;