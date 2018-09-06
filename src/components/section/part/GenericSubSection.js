import React from 'react';

export default ({ title, text }) => {
    return (
        <div className="marg-t-sm marg-b-sm">
            <h3 className="section-sub-heading">{title}</h3>
            <p className="section-text">{text}</p>
        </div>
    );
}
