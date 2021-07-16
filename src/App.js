import React,{useState} from 'react';
import './style.css';
import Game from './Game.js';

const Main =()=>{
    return (
        <div>
            <h1 style={{textAlign:'center',color:'white'}}>
            Lets Upgrade Find Winner Logic Application Assingment
            </h1>
            <p style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>
                Welcome to React Js Development Program!.
            </p>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>Day 3 Assignment</h3>
            <div style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
            }}>
                <Game></Game>
                </div>
        </div>

    )
}
export default Main