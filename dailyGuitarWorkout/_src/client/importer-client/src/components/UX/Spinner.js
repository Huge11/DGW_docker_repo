import React from 'react';
import './Spinner.css';



function Spinner({hidden=false}){

  return(
    <div className="Spinner">
      <div id="loadingAnimation" className="spinner-border text-primary" role="status" hidden={hidden}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner;