import React from 'react';

const SubmitButton = (props) => {
    return (
        <button type='submit' {...props} onClick={props.handleClick} className='py-2 px-6 w-fit bg-[#5227CC] text-white rounded-lg'>
            {props.text}
        </button>
    );
};

export default SubmitButton;