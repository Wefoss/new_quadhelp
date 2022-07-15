import React from 'react';
import {Form, Formik, Field} from 'formik'
import InputEvents from '../InputComponents/InputEvents/InputEvents';
import validationSchema from '../../validators/validationSchems';



const EventsForm = (props) => {
let eventsValues = {
    title: '',
    date: '',
    timeInterval: ''
}


    return (
        <Formik initialValues={eventsValues} onSubmit={props.submitFormEvents} validationSchema={validationSchema.EventsValidate}>
             <Form>
              <Field type="text" name='title' placeholder='write a new feafure' as={InputEvents}/>
              <Field type="date" name='date' placeholder='date' as={InputEvents}/>
              {/* <Field type="number" name='timeInterval' placeholder='timeInterval' as={InputEvents}/> */}
              <Field select='select' as={InputEvents} name='timeInterval'/>
              <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default EventsForm;
