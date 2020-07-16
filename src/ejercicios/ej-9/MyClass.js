import React from 'react';
import {myIp} from '../ej-9/api'

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }
    async componentDidMount(){
        const result=await myIp()
        this.setState({...this.state, ipAddress:result})
    }
    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;