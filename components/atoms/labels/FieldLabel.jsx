import React from 'react'

export default function FieldLabel({ htmlFor, children }) {
    return (
        <label className='mb-2 font-semibold' htmlFor={htmlFor}>{children}</label>
    )
}
