import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default () => {
    return (
        <div className="navigation-bar">
                <div></div>
                <ul className="navigation-list">
                    <li className="navigation-item"><ScrollLink to="about" smooth={true} offset={-75} duration={1000}>About</ScrollLink></li>
                    <li className="navigation-item"><ScrollLink to="ongoing" smooth={true} offset={-75} duration={1000}>Ongoing Projects</ScrollLink></li>
                    <li className="navigation-item"><ScrollLink to="projects" smooth={true} offset={-75} duration={1000}>Past Projects</ScrollLink></li>
                    <li className="navigation-item"><ScrollLink to="resume" smooth={true} offset={-75} duration={1000}>Resume</ScrollLink></li>
                    <li className="navigation-item"><ScrollLink to="contact" smooth={true} offset={-75} duration={1000}>Contact</ScrollLink></li>                
                </ul>
        </div>
    );
}
