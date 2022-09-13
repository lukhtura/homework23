//Core
import { Form, Field } from 'react-final-form';
import { v4 as uuidv4 } from 'uuid';
//Parts
import Button from './Button';



const NewForm = (props) => {

    const onSubmit = (values, form) => {
        const { onAdd } = props;
        onAdd({ id: uuidv4(), description: values.todoInput })
        form.reset();

    };

    const validate = (values) => {
        if (values === undefined || values.length < 5) {
            return '5 characters min'
        }
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={(props) => {
                const { handleSubmit } = props;
                return (
                    <form action="#" className="form" onSubmit={handleSubmit}>
                        <Field name="todoInput" validate={validate}>
                            {({ input, meta }) => (
                                <>
                                    <input {...input} className="form-input" type="text" placeholder="type your task" />
                                    {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                </>
                            )}
                        </Field>
                        <Button buttonText="Add" />
                    </form>
                )
            }}
        />
    )
};

export default NewForm;