//Core
import { Component } from 'react';
//Parts
import Button from './Button';

class Item extends Component {


    render() {
        const { description, onDelete } = this.props;
        
        return (
            <div className="todo-item js--todo-item">
                <label className="todo-label">
                    <input type="checkbox" className="js--complete" />
                    <p className="todo-item-desc" description="hello" >{description}</p>
                </label>
                <Button buttonText="Delete" onClick={ onDelete } />
            </div>
        )
    }
};

export default Item;