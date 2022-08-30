//Core
import { Component } from 'react';

class Button extends Component {
    render() {
        const { buttonText } = this.props;
        return <button className="form-button">{ buttonText } </button>
    };
};

export default Button;