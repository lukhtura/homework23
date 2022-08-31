//Core
import { Component } from 'react';

class Button extends Component {
    render() {
        const { buttonText, onDelete} = this.props;
        return <button className="form-button" onClick={ onDelete } >{ buttonText } </button>
    };
};

export default Button;