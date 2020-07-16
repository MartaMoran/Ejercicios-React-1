import React from 'react';
import {myIpError}  from '../ej-10/api'
class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }

    ipError =async() =>{
        const result=await myIpError()
        
        this.setState({...this.state, ipAddress:result})
    }



    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;