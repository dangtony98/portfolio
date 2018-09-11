import React from 'react';
import { Element } from 'react-scroll';

export default () => {
    return (
        <div className="ongoing-section marg-t-l marg-b-l">
            <Element name="ongoing"><h2 className="section-header">&#45; Ongoing Projects &#45;</h2></Element>
            <div className="ongoing-wrapper">
                <div className="ongoing-text">
                    <div className="ongoing-photo ongoing-photo--1"></div>
                    <h2>Want</h2>
                    <p>Want is a web and mobile platform where people can post desires that others can fulfill in exchange for money. The application is being built with a React/Redux frontend and a Laravel backend by myself and Maidul Islam, an Information Science major at Cornell. We aim to release the web application by Winter 2018-2019.</p>
                    <button className="button marg-t-xs">Coming soon &rarr;</button>
                </div>
                <div className="ongoing-text">
                    <div className="ongoing-photo ongoing-photo--2"></div>
                    <h2>Cornell Consulting Project</h2>
                    <p>Together with a 5-person team, I am delivering D3.js-generated graphs to create an interactive, fintech visualization for the confidential client's network. The web interface is being built with a HTML/CSS/JS frontend and a Django backend. The project is scheduled for 12 weeks.</p>
                    <button className="button marg-t-xs">Coming soon &rarr;</button>
                </div>
            </div>
        </div>
    );
}