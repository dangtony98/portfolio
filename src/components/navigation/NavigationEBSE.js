import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default () => {
    return (
        <div className="navigation-bar">
            <p><Link to="/">&larr; Back to Main</Link></p>
            <ul className="navigation-list">
                <li className="navigation-item"><ScrollLink to="ebse-background" smooth={true} offset={-75} duration={1000}>Background</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="ebse-toolbox" smooth={true} offset={-75} duration={1000}>Toolbox</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="ebse-goal" smooth={true} offset={-75} duration={1000}>Goal</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="ebse-development" smooth={true} offset={-75} duration={1000}>Development</ScrollLink></li>    
            </ul>
        </div>
    );
}
