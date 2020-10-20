import './style.css'
import React from 'react';

export default props  => {
    let { name } = props;
    
    return(
<div className ="d-flex flex-column justify-content-center align-items-center">  
    <h2>
            Shit and piss from react comp
           
    </h2>
    <p className = "red ">Privet { name } </p>
    </div>
    )
}