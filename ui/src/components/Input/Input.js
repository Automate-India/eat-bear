import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from 'react'

function Input(props) {
    const { inputType, label, value, disabled, onChange, name, id, type, required, onBlur, error, errorText, sx } = props;
    return (
        <div>
            <TextField
                label={label}
                variant={inputType}
                disabled={disabled}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                type={type}
                required={required}
                onBlur={onBlur}
                error={error}
                helperText={errorText}
                sx = {sx}
            />
        </div>
    )
}

export default Input;

Input.propTypes = {
    label: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(["outlined", "filled", "standard"]),
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    onBlur: PropTypes.func,
    sx : PropTypes.object
}

Input.defaultProps = {
    inputType: "standard",
    error: false,
    onBlur: () => { },
    errorText: "",
    type: "text",
    disabled: false,
    required: false,
    onChange: () => { },
    sx: {}
}