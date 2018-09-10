import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default () => {
    return (
        <div className="navigation-bar">
            <p><Link to="/">&larr; Back to Main</Link></p>
            <ul className="navigation-list">
                <li className="navigation-item"><ScrollLink to="intersect-background" smooth={true} offset={-75} duration={1000}>Background</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="intersect-problem" smooth={true} offset={-75} duration={1000}>Problem</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="intersect-solution" smooth={true} offset={-75} duration={1000}>Solution</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="intersect-ideation" smooth={true} offset={-75} duration={1000}>Ideation</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="intersect-development" smooth={true} offset={-75} duration={1000}>Development</ScrollLink></li>
                <li className="navigation-item"><ScrollLink to="intersect-takeaways" smooth={true} offset={-75} duration={1000}>Takeaways</ScrollLink></li>      
            </ul>
        </div>
    );
}
