import React from 'react';
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
       
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">स्वदेशी समाज सेवा समिति</a>
                    <ul className="right hide-on-med-and-down">
                              
                        <li><Link to="/">Home</Link></li>
                        <li><Link to = "/gallery">Gallery</Link></li>
                        <li><Link to="/volunteer">Volunteers</Link></li>
                        <li><Link to ="/news">News</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <Link to = "/createVolunteer"className="btn waves-effect waves-teal"><i className="material-icons left"></i>Donate</Link>
                    </ul>
                </div>
            </nav>
      
    )
}

export default Navbar;