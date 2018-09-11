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
            {position.map((text) => (
                <div>
                    <p className="resume-position marg-l-sm">{text}</p>
                </div>
            ))}
            <ul>
                {description.map((text) => <li>{text}</li>)}
            </ul>
        </div>
    );
}
