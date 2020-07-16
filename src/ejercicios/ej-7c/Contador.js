import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

class Contador extends React.Component  {
    constructor(props){
        super(props);
        this.state={count: (0)}
    }
    sumaClick(one){
        this.setState({...this.state.count, count:one })
    }
    render(){
    return (
        <div className="alert alert-primary">
            <MyLabel count={this.state.count} />
            <Boton count={this.state.count} setCount={()=>this.sumaClick(this.state.count+1)}/>
        </div>
    );
    }
};

export default Contador;