import React, {useState} from 'react';
import {myIp} from '../ej-9f/api'

 const MyComponent= ()=> {
   const [ipAddress, setIpAdress]=useState('...')
       const actualiceIp=async()=>{
        const result=await myIp()
        setIpAdress(result)
       }
       actualiceIp()
        return (
            <h1>Mi ip es {ipAddress}</h1>
        );
    
}

export default MyComponent;