import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from 'react'

function Input(props) {
    const {inputType, label, value, disabled, onChange, name, id, type} = props;
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
    type: PropTypes.string
}

Input.defaultProps = {
    inputType: "standard",
    type: "text",
    disabled: false,
    onChange: () => {}
}