//Core
import { useState } from 'react';
//Parts
import Button from './Button';

const Item = (props) => {
    const [edit, setEdit] = useState(false);

    const handleDelete = () => {
        const { id, onDelete } = props;
        onDelete(id);
    };

    const handleEdit = () => {
        setEdit(!edit);
    };

    let inputEditValue;
    const handleChange = (e) => {
        inputEditValue = e.target.value;
        return inputEditValue;
    };

    const handleSave = () => {
        const { id, onSave } = props;
        if (inputEditValue) {
            onSave({id}, inputEditValue);
        };
        setEdit(!edit);
    };

    const handleChecked = () => {
        const { id, onUpdate, checked } = props;
        onUpdate({ id, checked: !checked });
    };

    const { description, checked } = props;

    return (
        <div className="todo-item">
            <label className="todo-label">
                <input type="checkbox" defaultChecked={checked} onClick={handleChecked} />
                {edit
                    ? <input className="todo-edit-input" type="text" defaultValue={description} onChange={handleChange} />
                    : <p className="todo-item-desc" description="hello" >{description}</p>}
            </label>
            {edit
                ? <Button buttonText="Save" onClick={handleSave} />
                : <Button buttonText="Edit" onClick={handleEdit} />}
            <Button buttonText="Delete" onClick={handleDelete} />
        </div>
    );
};

export default Item;