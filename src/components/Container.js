import React from 'react';
import "./Container.css";
import machine from './back.jpg'
import tool from './tool.jpeg'
import { Link } from 'react-router-dom'
export default function Container() {


  const proceed=()=>{

      window.location.href("https://www.w3schools.com")
        }


  return (
      <div className="main">
    <div className="col">
    <h1>What machine we are working on ?</h1><hr/>
    
  <img className="i0" src={machine}/><p className="p0">Yamazaki Mazak manufactures not only advanced machine tools such as multi-tasking centers, CNC turning centers, machining centers and laser processing machines but also automation systems with the concept of DONE IN ONE to support global manufacturing by providing exceptional productivity and versatility. ...</p>
   <h1 className="h">What tool we are working on ?</h1><hr/>
    <p className="p1">Yamazaki Mazak manufactures not only advanced machine tools such as multi-tasking centers, CNC turning centers, machining centers and laser processing machines but also automation systems with the concept of DONE IN ONE to support global manufacturing by providing exceptional productivity and versatility. ...</p>
   <img className="i1" src={tool}/> </div><br/><br/><br/><br/>
   <Link to="/Actual" class="hero-btn">Proceed for Tool Life Prediction</Link><br/><br/>

    </div>
  );
}