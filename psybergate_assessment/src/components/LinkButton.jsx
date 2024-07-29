import React from 'react';

function LinkButton({ text, onClick, icon }) {
    return (
        <button className="btn-base btn" onClick={onClick}>
            {icon && <img src={icon} alt="icon" className="icon-class" />}
            {text}
        </button>
    );
}

export default LinkButton;
