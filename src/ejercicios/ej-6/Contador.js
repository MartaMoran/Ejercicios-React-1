import React, {useState} from 'react';

const Contador = () => {
    const [cont, setCont]=useState(0);
    
    const sumaClick = () => {
        setCont(cont+1)
    }

    return (
        <div className="alert alert-primary">
            <p><b>Has dado {cont} clicks</b></p>
            <button className="btn btn-info" onClick={sumaClick}>suma 1</button>
        </div>
    );
};

export default Contador;