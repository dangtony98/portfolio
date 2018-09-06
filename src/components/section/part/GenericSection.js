import React from 'react';
import { Element } from 'react-scroll';

export default ({ title, text, sectionName }) => {
    return (
        <div className="marg-t-l">
            <Element name={sectionName}><h2 className="section-header">{title}</h2></Element>
            {text.map((paragraph) => <p className="section-text">{paragraph}</p>   
        )}
        </div>
    );
}