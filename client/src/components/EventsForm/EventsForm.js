import React from 'react';
import {Form, Formik, Field} from 'formik'
import InputEvents from '../InputComponents/InputEvents/InputEvents';
import validationSchema from '../../validators/validationSchems';
import styles from './EventsForm.module.css'


const EventsForm = (props) => {
let eventsValues = {
    title: '',
    date: '',
    time: ''
}


    return (
        <Formik className={styles.form} initialValues={eventsValues} onSubmit={props.submitFormEvents} validationSchema={validationSchema.EventsValidate}>
             <Form>
              <Field type="text" name='title' placeholder='write a new feafure' as={InputEvents}/>
              <Field type="date" name='date' placeholder='date' as={InputEvents}/>
              <Field select='select' as={InputEvents} name='time'/>
              <button type="submit">Add feature</button>
            </Form>
        </Formik>
    );
}

export default EventsForm;
