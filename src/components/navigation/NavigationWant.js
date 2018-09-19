import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default () => {
    return (
        <div className="navigation-bar">
            <p><Link to="/">Back</Link></p>
            <ul className="navigation-list"></ul>
        </div>
    );
}