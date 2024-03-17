import React from 'react';
import Spinner from '../spinner/Spinner';
const SubmitButton = (props) => {
    return (
        <button type='submit' {...props} onClick={props.handleClick} className={`flex min-w-24 sm:w-full md:w-auto justify-center items-center py-2 px-4 bg-[#5227CC] text-white rounded-lg ${props.className}`}>
            {props.loading ? <Spinner /> : props.text}
        </button>
    );
};

export default SubmitButton;