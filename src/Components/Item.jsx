//Core
import { Component } from 'react';
//Parts
import Button from './Button';

class Item extends Component {

    test() {
        const { removeItem } = this.props;
        console.log("it's not from wrapper")
        removeItem() 
    }

    render() {
        const { description } = this.props;
        return (
            <div className="todo-item js--todo-item">
                <label className="todo-label">
                    <input type="checkbox" className="js--complete" />
                    <p className="todo-item-desc" description="hello" >{description}</p>
                </label>
                <Button buttonText="Delete" onClick={ this.test.bind(this) } />
            </div>
        )
    }
};

export default Item;