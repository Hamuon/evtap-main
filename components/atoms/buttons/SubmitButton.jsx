import React from 'react';
import Spinner from '../spinner/Spinner';
const SubmitButton = (props) => {
    return (
        <button type={props.type} {...props} onClick={props.handleClick} className={`btn min-w-24 text-white bg-button-primary-color  hover:bg-button-secondary-color ${props.className}`}>
            {props.loading ? <Spinner /> : props.text}
        </button>
    );
};

export default SubmitButton;