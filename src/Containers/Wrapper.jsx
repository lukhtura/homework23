//Core
import React, { useState, useEffect } from 'react';
//Parts
import Form from "../Components/Form";
import Item from '../Components/Item';

const Wrapper = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(
            JSON.parse(localStorage.getItem('items')) || []
        )
    }, []);

    const addItem = ({ id, description }) => {
        const newItems = [...items, { id, description }];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    };

    const updateItem = ({ id, checked }) => {
        const updateItems = items.map(item => {
            if (item.id === id) {
                item.checked = checked;
            }
            return item;
        });
        setItems(updateItems);
        localStorage.setItem('items', JSON.stringify(updateItems));
    };

    
    const editItem = (id) => {
        items.forEach((item, i) => {
            if (item.id === id) {
                return item;
            }
            localStorage.setItem('items', JSON.stringify(items));
            setItems(items);
        });
    }

    const deleteItem = (id) => {
        items.forEach((item, i) => {
            if (item.id === id) {
                items.splice(i, 1)
            }
            localStorage.setItem('items', JSON.stringify(items));
            setItems(items);
        });
    };

    return (
        <div className="container">
            <h1>TODO</h1>
            <Form onAdd={addItem} />
            <br />
            <h2>TODOS</h2>
            <br />
            <hr />
            <div className="todo-wrapper">
                {items.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        checked={item.checked}
                        onDelete={deleteItem}
                        onUpdate={updateItem}
                        onEdit={editItem} />)}
            </div>
        </div>
    )
}

export default Wrapper;