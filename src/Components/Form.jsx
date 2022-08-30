//Core
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
//Parts
import Button from '../Components/Button';


class Form extends Component {

    handleAdd(event) {
        event.preventDefault();
        const { onAdd } = this.props;
        onAdd({id: uuidv4(), description: event.target.description.value})
    }

    render() {
        return (
            <form action="#" className="form" onSubmit={this.handleAdd.bind(this)}>
                <input type="text" name="description" className="form-input" onChange={ this.handleChange }/>
                <Button buttonText="Add" onClick={ this.handleSubmit }/>
            </form>
        );
    }
};

export default Form;