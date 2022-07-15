import React from 'react';
import EventsForm from '../../components/EventsForm/EventsForm';

const EventsContest = () => {

const submitFormEvents = (e) => {
    console.log(e)
}    

    return (
        <div>
            <EventsForm submitFormEvents={submitFormEvents}/>
        </div>
    );
}

export default EventsContest;
