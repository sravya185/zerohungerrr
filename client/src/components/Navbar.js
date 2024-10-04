import React from 'react';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar' style={{ backgroundColor: 'white', }}>
           <img src={logo} lt="" className='logo' />&nbsp;&nbsp;
            <h3>SUPPORT ZERO HUNGER</h3>
            {/* <div style={{marginLeft:'0rem'}}> */}
                <ul className="navbar">
                <li><Link to="/">WHO WE ARE</Link></li>
                <li><Link to="/">OUR GOAL</Link></li> 
                <li><Link to="/NeedFood">WANT FOOD</Link></li>
                <li><Link to="/Donar">DONATE WITH US</Link></li>
                <li><Link to="/SuccessStories">SUCCESS STORIES</Link></li>
                <li>
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            If  You  Are  a  Volunteer
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="item"><Link to='/Register'>Register</Link></div>
                                <div className="item"><Link to='/Login'>Login</Link></div>
                            </div>
                        </div>
                    </div>
               </li>
            </ul>
            {/* </div> */}
        </div>
    );
};

export default Navbar;
