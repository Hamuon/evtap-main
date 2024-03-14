"use client"
import React, { useReducer, useEffect } from "react";

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
}

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.value
    })

    const { id, onInput } = props;
    const { value } = inputState;

    useEffect(() => { onInput(id, value) }, [id, onInput, value])

    const changeHandler = (event) => {
        dispatch({
            type: "CHANGE",
            value: event.target.value
        })
    }

    const element = props.element === "input" ? (
        <input className={props.className} id={props.id} type={props.type} placeholder={props.placeholder}
            onChange={changeHandler} value={inputState.value} />
    ) : (
        <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value} />
    );

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )

}

export default Input;
