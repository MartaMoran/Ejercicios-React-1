import React from 'react';
import {myIp} from '../ej-11/api'

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }
     async componentDidMount(){
         const result=await myIp()
         this.setState({ipAddress:result})
     }

    render() {
        const emptyIp=this.state.ipAddress===('...')
        return (
            <div>
                {emptyIp
                 ? <h1>Cargando...</h1>
                 :<h1>Mi ip es {this.state.ipAddress}</h1>
                }
            </div>
        );
    }
}

export default MyClass;