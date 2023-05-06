import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from 'react'

function Input(props) {
    const {inputType, label, value, disabled, onChange} = props;
    return (
    <div>
        <TextField 
            label={label} 
            variant={inputType} 
            disabled={disabled} 
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default Input;

Input.propTypes = {
    label: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(["outlined", "filled", "standard"]),
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}

Input.defaultProps = {
    inputType: "standard",
    disabled: false,
    onChange: () => {}
}