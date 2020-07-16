import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state={count:(0)}
    }
    sumaClick = () => {
        const result=this.state.count+1
         this.setState({...this.state.count, count:result})
    }

    render(){
    return (
        <div className="alert alert-primary">
            <p><b>Has dado {this.state.count} clicks</b></p>
            <button className="btn btn-info" onClick={this.sumaClick}>suma 1</button>
        </div>
    );
    }
};

export default Contador;