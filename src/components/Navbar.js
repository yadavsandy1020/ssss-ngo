import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FaHome from 'react-icons/lib/fa/home'
import IoPersonStalker from 'react-icons/lib/io/person-stalker'
import IoLogIn from 'react-icons/lib/io/log-in'
import FaImage from 'react-icons/lib/fa/image'
import Button from 'react-bootstrap/Button'
import '../App.css'
// import IoLogIn from 'react-icons/lib/io/log-in'
// import IoLogIn from 'react-icons/lib/io/log-in'


const MyNavbar = () => {
    return (

        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/home">स्वदेशी समाज सेवा समिति</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="ml-auto">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <Nav.Link href="/home"><FaHome size={30}/></Nav.Link>
                        <Nav.Link href="/keyPeople"><IoPersonStalker size={30}/></Nav.Link>

                        <Nav.Link href="/gallery"><FaImage size={30}/></Nav.Link>
                        <Nav.Link href="/login"><IoLogIn size={30}/></Nav.Link>
                        <Nav.Link href="/donate"><Button variant = "secondary" type="submit">Donate</Button></Nav.Link>
                   
                        

                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar>

    )
}

export default MyNavbar;