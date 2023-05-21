import React from 'react'
import PropTypes from "prop-types";
import MuiButton from '@mui/material/Button';

function Button(props) {
    const { children, disabled, buttonType, onClick, type } = props;

    return (
        <div>
            <MuiButton variant={buttonType}
                disabled={disabled}
                onClick={onClick}
                type={type}
            >
                {children}
            </MuiButton>
        </div>
    )
}

export default Button;

Button.propTypes = {
    buttonType: PropTypes.oneOf(["text", "contained", "outlined"]),
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
}

Button.defaultProps = {
    buttonType: "contained",
    disabled: false,
    type: "button",
    onClick: () => { }
}