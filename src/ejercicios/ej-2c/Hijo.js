import React from 'react';
import { render } from '@testing-library/react';

class Hijo extends React.Component {

    render() {
    return (
        <div className="alert alert-success">
            <h4>Hijo</h4>
            <button onClick={this.props.onClick} className="btn btn-info">¡Dar click aquí!</button>
        </div>
        );
    }
};

export default Hijo;