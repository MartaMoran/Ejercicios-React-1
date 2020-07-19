import React, {useState} from 'react';
import myIp from './api';

const  MyComponent =()=>{
        const [ipAddress, setIpAddress]=useState('...');
        const getMyIp=async()=>{
            const result=await myIp();
            setIpAddress(result);
        }
        getMyIp()
        const emptyIP=ipAddress===('...')
        return (
        
            <div>
               {emptyIP
               ?<h1>Cargando...</h1>
               : <h1>Mi ip es {ipAddress}</h1>
               }
                
               
            </div>
        );
    
}

export default MyComponent;