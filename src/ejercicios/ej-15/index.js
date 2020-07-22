import React from 'react';
import Contadores from "./Contadores";

const Ejercicio15 = () => {
    const changeNumber=(num)=>{
        if (num==='') {
            return '0'
        }else{
            return num
        }
    }
    return (
        <Contadores count1={changeNumber('2')} count2={changeNumber('')} count3={changeNumber('4')}/>
    );
};

export default Ejercicio15;