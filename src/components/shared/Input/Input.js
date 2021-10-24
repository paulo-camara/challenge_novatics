import React from 'react';

export const Input = ({ onChange, value, placeholder, style }) => {
    return <input
        style={style}
        value={value}
        className="input-field"
        placeholder={placeholder}
        onChange={event => onChange(event)}
        onKeyUp={event => onChange(event)}
    />
};
