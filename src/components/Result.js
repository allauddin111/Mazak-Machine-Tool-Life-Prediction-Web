import React from 'react';
import "./Result.css";
import machine from './broken.jpg'
export default function Result() {
  return (
      <div className="main">
        <h2> Results</h2><br/> <div className="mess">
        <p><b>Condition     </b>    :    Tool is chipped out</p>
        <p><b>Action Time     </b>    :    10:10:59 AM</p>
        <p><b>Action to be taken     </b>    :    Replace OD insert </p>
            </div>    <br/><br/>
        <img className="i01" src={machine}/><p className="p0"/>
       
    </div>
  );
}