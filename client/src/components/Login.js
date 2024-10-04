import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import Volunteer from './Volunteer';
// import { UseUserContext } from '../UseUserContext';
import UseUserContext from '../UseUserContext';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loggedIn, setLoggedIn} = UseUserContext();
    console.log("log",loggedIn)

    // const onSubmit=(formdata)=>{console.log(formdata)}
    const onSubmit = async (formdata) => {
        // console.log(formdata)
        try {
          const response = await axios.post('http://localhost:3453/volunteer/login',formdata);
          // console.log(response.data)
          toast.success(response.data.message,{
            theme:'light',
            autoClose:2000,
          })
          setTimeout(()=>{ navigate('/Volunteer') },1000)
          
        //   console.log("before",loggedIn)
        //   localStorage.setItem("token",response.data.token)
        //   let token = localStorage.getItem("token");
        //       if(token){
        //           setLoggedIn(true)
        //       }
            // console.log(loggedIn)
        //   console.log(response.data.token)
            
        //   console.log(response.data)
        }     catch (err) {

            if (err.response.status == 400) 
            {
               toast.error(err.response.data.message, {
                   autoClose: 2000,
                   theme:'light',
               });
               return;
           } 
           else if(err.response.status == 401 || err.response.status == 402 || err.response.status == 501){
               toast.error(err.response.data.message,{
                   autoClose:2000,
                   theme:'light'
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
            <div className="Header">
                <p>Login</p>
                <div className="division">
                    <form className="ui form segment" onSubmit={handleSubmit(onSubmit)}>
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
                message: 'Invalid Username',
              },
            })}
          />
          {errors.username && <p className='error-message'>{errors.username.message}</p>}
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
                message: 'Invalid Password',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};':"|,.<>?]).*$/,
                message: 'Invalid Password',
              },
            })}
          />
          {errors.password && <p className='error-message'>{errors.password.message}</p>}
                        </div>
                        <input type="submit" value="Submit" className="ui primary submit button" />
                        {console.log("hello")}
                        <ToastContainer/>
                        {/* <button className="ui primary submit button" >Submit</button> */}
                    </form>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Login;