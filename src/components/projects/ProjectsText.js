import React from 'react';

export default ({title, text}) => {
    return (
        <div className="projects-text">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}
