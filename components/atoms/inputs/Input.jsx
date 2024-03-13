"use client"
import React, { useContext, useEffect } from "react";
import { FormCtx } from "@/components/molecules/forms/Form";

const Input = props => {
    const { id } = props;
    const { fields, setFields, addField, errors, validateField } = useContext(
        FormCtx
    );
    const field = fields[id] || {};
    const fieldError = errors[id] || "";
    const { value = "" } = field;

    useEffect(() => {
        addField({
            field: props,
            value: ""
        });
    }, []);

    useEffect(() => {
        if (field.value !== undefined) {
            validateField(id);
        }
    }, [value]);

    return field ? (
        <div>
            <input
                type="text"
                value={field && value}
                onChange={event => setFields(event, field)}
            />
            <p>{fieldError}</p>
        </div>
    ) : (
        ""
    );
};

export default Input;
