import React from 'react';
;

const InputEvents = (props) => {

    // const choiseInput = () => {
    //      return props.select : <input {...props}/>  ?
    // }

    return (
        <>
            {props.select ?  <select {...props}><option value="1">Hours</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="10">10</option>
             </select> : <input {...props}/>}
        </>
    );
}

export default InputEvents;
