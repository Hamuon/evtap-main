import React from 'react';

const SubmitButton = ({ text, handleClick }) => {
    return (
        <button onClick={handleClick} className='py-2 px-6 w-fit bg-[#5227CC] text-white rounded-lg'>
            {text}
        </button>
    );
};

export default SubmitButton;