const Button = (props) => {
    const { buttonText, onClick } = props;
    return <button className="form-button" onClick={onClick} >{buttonText} </button>
};

export default Button;