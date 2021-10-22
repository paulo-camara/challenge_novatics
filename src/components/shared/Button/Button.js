import React from 'react';

export const Button = ({ title, onClick }) => {
    return <div className="button-container">
        <button onClick={onClick} className="button">
            {title}
        </button>
    </div>
};