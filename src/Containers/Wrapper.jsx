//Core
import { Component } from 'react';
//Parts
import Form from "../Components/Form";
import Item from '../Components/Item';


class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ id: 1, description: "Hello" }, { id: 2, description: "Hello 2" }, { id: 3, description: "Hello 3" }]
        }

    }

    addItem({ id, description }) {
        const { items } = this.state;
        this.setState({
            items: [...items, { id, description }]
        })
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container">
                <h1>TODO</h1>
                <Form onAdd={this.addItem.bind(this)} />
                <br />
                <h2>TODOS</h2>
                <br />
                <hr />
                <div className="todo-wrapper">
                    {items.map(item => <Item key={item.id} id={item.id} description={item.description}/>)}
                </div>
            </div>
        )
    }
}

export default Wrapper;