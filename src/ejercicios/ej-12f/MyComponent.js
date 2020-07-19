import React, {useState} from 'react';
import apiChuck  from './api'

const MyComponent= ()=>{
    const[chuckFact, setChuckFact]=useState('...');

   const  handleClick=async()=>{
        const result= await apiChuck();
        setChuckFact(result);
    }
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg" />
                <button onClick={handleClick}>Cargar frase</button>
                <h1>Chuck fact {chuckFact}</h1>
            </div>
        );
    
}

export default MyComponent;