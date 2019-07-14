import React from 'react'
import '../App.css';
import logo from '../images/profile.jpg'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
const KeyPeople = () => {
    return (
        <div className="container">
            <CardColumns>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} className="cardImage" />
                    <Card.Body >
                        <Card.Title>सविवेक यादव (सचिव)</Card.Title>
                        <Card.Text>
                        <p>पता: नगला जोरे</p>
                        <p>मो. +918131823812</p>
                         </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} className="cardImage" />
                    <Card.Body >
                        <Card.Title>सविवेक यादव (सचिव)</Card.Title>
                        <Card.Text>
                        <p>पता: नगला जोरे</p>
                        <p>मो. +918131823812</p>
                         </Card.Text>
                    </Card.Body>
                </Card>
                
             
            </CardColumns>
        </div>
    )
}

export default KeyPeople