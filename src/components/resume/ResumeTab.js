import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, position, date, description }) => {
    return (
        <div>
            <div className="resume-main marg-l-sm">
                <Link 
                    to="/"
                    className="resume-link"
                >{title}</Link>
                <p>{date}</p>            
            </div>
            <p className="resume-position marg-l-sm">{position}</p>
            <ul>
                {description.map((text) => <li>{text}</li>)}
            </ul>
        </div>
    );
}
