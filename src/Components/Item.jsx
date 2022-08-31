//Core
import { Component } from 'react';
//Parts
import Button from './Button';

class Item extends Component {

    handleDelete = () => {
        const { id, onDelete } = this.props;
        onDelete(id)
    }


    render() {
        const { description } = this.props;
        
        return (
            <div className="todo-item js--todo-item">
                <label className="todo-label">
                    <input type="checkbox" className="js--complete" />
                    <p className="todo-item-desc" description="hello" >{description}</p>
                </label>
                <Button buttonText="Delete" onClick={ this.handleDelete } />
            </div>
        )
    }
};

export default Item;