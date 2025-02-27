import React from 'react';
import { Card, Col, Button, Alert } from 'react-bootstrap';

const Event = ({ id, name, img, price, nbTickets, nbParticipants, like, bookEvent, toggleLike, handleDeleteEvent }) => {
    const soldOutImage = '/images/sold_out.png'; 
    const imageToDisplay = nbTickets === 0 ? soldOutImage : img;

    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={imageToDisplay} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price : {price} </Card.Text>
                    <Card.Text>Number of tickets: {nbTickets}</Card.Text>
                    <Card.Text>Number of participants : {nbParticipants}</Card.Text>

                    {/* Booking Button */}
                    <Button onClick={bookEvent} disabled={nbTickets === 0} className="me-2">
                        {"Book an event"} 
                    </Button>

                    {/* Delete Button */}
                    <button onClick={() => handleDeleteEvent(id)}>Delete Event</button>

                    {/* Like/Dislike Button */}
                    <Button variant={like ? "danger" : "success"} onClick={toggleLike}>
                        {like ? "Dislike" : "Like"}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;
