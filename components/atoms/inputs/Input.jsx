import React from 'react'

export default function Input({ type, placeholder, value, name, className, handleChange }) {


    return (
        <div className='w-full'>
            <input className={className} type={type} placeholder={placeholder} value={value} name={name} onChange={handleChange} />
        </div>
    )
}

