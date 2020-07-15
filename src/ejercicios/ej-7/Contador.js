import React, {useState} from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

const Contador = () => {
    const [cont, setCont]=useState(0)
    
    const sumaClick = (props) => {
       setCont(cont+1)
      
    }

    return (
        <div className="alert alert-primary">
            <MyLabel cont={cont}/>
            <Boton cont={cont} setCont={sumaClick} />
        </div>
    );
};

export default Contador;