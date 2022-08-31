//Core
import { Component } from 'react';

class Button extends Component {
    render() {
        const { buttonText, onClick} = this.props;
        return <button className="form-button" onClick={ onClick } >{ buttonText } </button>
    };
};

export default Button;