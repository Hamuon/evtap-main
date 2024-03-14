import React from 'react';

const SubmitButton = ({ children, handleClick }) => {
    return (
        <button type='submit' className='py-2 px-6 w-fit bg-[#5227CC] text-white rounded-lg' onClick={handleClick}>
            {children}
        </button>
    );
};

export default SubmitButton;