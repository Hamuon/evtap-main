import React from 'react'

export default function Label({ children, htmlFor }) {
    return (
        <label className='text-slate-400 font-semibold mb-2' htmlFor={htmlFor}>
            {children}
        </label>
    )
}
