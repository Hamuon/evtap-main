import React from 'react';

const SubmitButton = ({ children, onClick }) => {
    return (
        <button className='' onClick={onClick}>
            {children}
        </button>
    );
};

export default SubmitButton;