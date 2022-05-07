import React from "react";
import './index.css';

export default  function Startpage(props){
    return (
        <div className="spcontainer" >
        <div className='startpage center'>
            <h1>quizzical</h1>
            <p>some description</p>
        <button onClick={props.startgame}>start game </button>
          </div>
        </div>
          );
}