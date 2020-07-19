import React, {useState} from 'react';
import myErrorIp from './api'

const MyComponent=()=> {
    const [ipAddress, setIpAdress]=useState('...')

    const checkIp=async()=>{
        const result=await myErrorIp()
        setIpAdress(result)
    }
    checkIp()
    

    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

   
        return (
            <h1>Mi ip es {ipAddress}</h1>
        );
    
}

export default MyComponent;