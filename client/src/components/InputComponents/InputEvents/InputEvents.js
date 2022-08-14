import React from 'react';
import styles from './InputEvents.module.css'
import { ErrorMessage, useField } from 'formik';

const InputEvents = (props) => {
const [field, meta] = useField(props)

console.log(meta);

     return (
        <div  style={{'position': 'relative'}}>
            {props.select ?  <select className={(meta.touched && meta.error && meta.value === null) ? styles.errorBorder : undefined} {...props}><option>Hours</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="10">10</option>
             </select> : <input style={{'border': (meta.touched && meta.error ) && '1px solid lightcoral' }}  {...props} />}
             <ErrorMessage name={props.name} className={styles.error} component='div'/>
        </div>
    );
}

export default InputEvents;
