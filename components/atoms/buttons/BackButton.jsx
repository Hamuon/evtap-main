import React from 'react';

const BackButton = ({ handleBack }) => {
    return (
        <button className='py-2 px-6 w-fit bg-white text-[#7749F8] border border-[#7749F8] rounded-lg' onClick={handleBack}>
            بازگشت
        </button>
    );
};

export default BackButton;