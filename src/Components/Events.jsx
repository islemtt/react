import React, { useState, useEffect } from 'react';
import { Row, Alert } from 'react-bootstrap';
import Event from './Event';
import { fetchEvents, deleteEvent } from '../services/api';
// import AddEventForm from '../form/AddEventForm';  // Updated import path
import AddEventForm from '../form/addEventForm';  // Updated import path
const Events = () => {
    const [events, setEvents] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const data = await fetchEvents();  // Get events from the API
                setEvents(data);  // Set the events in the state
            } catch (error) {
                console.error("Erreur lors du chargement des événements:", error);
            }
        };

        fetchEventsData();  // Call the fetchEvents function

        // Make the welcome message disappear after 3 seconds
        setTimeout(() => setShowWelcome(false), 3000);
    }, []);

    const bookEvent = (id) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === id && event.nbTickets > 0
                    ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
                    : event
            )
        );
    };

    const toggleLike = (id) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === id ? { ...event, like: !event.like } : event
            )
        );
    };

    const handleDeleteEvent = async (id) => {
        await deleteEvent(id);  // Delete the event from the API
        const updatedEvents = await fetchEvents();  // Refresh the event list
        setEvents(updatedEvents);  // Update the state with the new event list
    };

    return (
        <> 
            {showWelcome && <Alert variant="success">Hey welcome to Esprit Events</Alert>}
            <Row>
                <AddEventForm onEventAdded={handleDeleteEvent} />
                {events.map((event) => (
                    <Event
                        key={event.id}
                        {...event}
                        bookEvent={() => bookEvent(event.id)}
                        toggleLike={() => toggleLike(event.id)}
                        handleDeleteEvent={handleDeleteEvent}
                    />
                ))}
            </Row>
        </>
    );
};

export default Events;
