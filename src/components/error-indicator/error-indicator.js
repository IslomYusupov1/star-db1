import React from "react";

import './error-indicator.css'

const  ErrorIndicator = () =>{
    return(
        <div className="error-indicator">

           <br/>
            <span className="boom">BooM!</span><br/>
            <span>
                Something has gone terrible wrong
            </span><br/>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
};

export default ErrorIndicator;