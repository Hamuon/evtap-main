import React from 'react'

export default function Input(props) {


    return (
        <div className='w-full'>
            <input {...props} className={props.className} type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.handleChange} />
        </div>
    )
}

