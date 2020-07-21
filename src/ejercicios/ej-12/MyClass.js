import React from 'react';
import {apiChuck} from '../ej-12/api'

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chuckFact: '...'};
    }
    handleClick=async()=>{
        const result=await apiChuck()
        this.setState({...this.state, chuckFact:result})
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                <img src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg" />
                <button onClick={this.handleClick}>Cargar frase</button>



                <h1>Chuck fact {this.state.chuckFact}</h1>
            </div>
        );
    }
}

export default MyClass;