const Button = (props) => {
    const { buttonText, onClick, errors } = props;
    return <button disabled={errors} className="form-button" onClick={onClick} >{buttonText}</button>
};

export default Button;