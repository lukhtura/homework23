//Parts
import Button from './Button';

const Item = (props) => {

    const handleDelete = () => {
        const { id, onDelete } = props;
        onDelete(id);
    };

    const handleEdit = () => {
        const { id, onEdit } = props;
        onEdit(id);
    }

    const handleChecked = () => {
        const { id, onUpdate, checked } = props;
        onUpdate({ id, checked: !checked });
    };

    const { description, checked } = props;

    return (
        <div className="todo-item js--todo-item">
            <label className="todo-label">
                <input type="checkbox" defaultChecked={checked} onClick={handleChecked} />
                <input type="text" className="todo-item-desc" defaultValue={description}/>
                {/* <p className="todo-item-desc" description="hello" >{description}</p> */}
            </label>
            <Button buttonText="Edit" onClick={handleEdit} />
            <Button buttonText="Delete" onClick={handleDelete} />
        </div>
    );
};

export default Item;