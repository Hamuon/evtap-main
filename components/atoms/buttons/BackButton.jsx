import React from 'react';

const BackButton = (props, { handleBack }) => {
    return (
        <button type={props.type} className={`btn min-w-24 ${props.className}`} onClick={handleBack}>
            بازگشت
        </button>
    );
};

export default BackButton;