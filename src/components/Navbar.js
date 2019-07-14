import React from 'react';

import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
       
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">स्वदेशी समाज सेवा समिति</a>
                    <ul className="right hide-on-med-and-down">
                    
                        <li><Link to="/"><i className="material-icons">home</i></Link></li>
                        <li><Link to = "/gallery"><i className="material-icons">photo_library</i></Link></li>
                        <li><Link to="/volunteer"><i className="material-icons">people</i></Link></li>
                        <li><Link to ="/news"><i className="material-icons">sms</i></Link></li>
                        <li><Link to="/contact"><i className="material-icons">contact_phone</i></Link></li>
                        <li><Link to="/login"><i className="material-icons">account_circle</i></Link></li>
                        
                        <Link to = "/createVolunteer"className="btn waves-effect waves-teal"><i className="material-icons left"></i>Donate</Link>
                    </ul>
                </div>
            </nav>
      
    )
}

export default Navbar;