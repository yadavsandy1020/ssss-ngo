import React from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import IoPersonStalker from 'react-icons/lib/io/person-stalker'
const Cards = () => {
    return (

        <div>
            <Card bg="primary" text="white" style={{ width: '25rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card bg="secondary" text="white" style={{ width: '25rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
            <br />


        </div>

    )
}

export default Cards