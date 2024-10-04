import React from 'react';

import logo from '../Images/logo.png';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='part1'> <img src={logo} className="img" /></div>
            <div className='part2'><div>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
                <br></br>
                <a href="#">Privacy Policy &nbsp; </a>| <a href="#">Terms and Conditions</a>
            </div>
                <div>
                    <p>
                        Boyenpalli ,Hyderabad, 68,
                        00148 India
                    </p>
                    <a href="#">Provided by SBPB</a>
                </div></div>
        </div>
    )
};

export default Contact;