import React from 'react';
import {myIpError} from './api'
class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }

    async componentDidMount(){
        const result=await myIpError()
        this.setState({ipAddress:result})
    }



    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;