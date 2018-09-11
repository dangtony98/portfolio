import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ProjectsText from '../../projects/ProjectsText';

export default () => {
    return (
        <div className="projects-section marg-t-l">
            <Element name="projects"><h2 className="section-header">&#45; Past Projects &#45;</h2></Element>
            <div className="projects-wrapper projects-wrapper--1">
                <div className="projects-photo projects-photo--1">
                    <div className="projects-photo--1__showcase"></div>
                </div>
                <div className="projects-text">
                    <div className="projects-text">
                        <h2>EBSE</h2>
                        <p>Everybody Buys and Sells Everything (EBSE) is a frontend ecommerce prototype that I developed with React/Redux. The 1.5-week process during Summer 2018 sought the development of five pages (Home Page, Search Page, Product Page, Login Page, Signup Page) with added features including a real-time shopping cart and multi-filter drop-down.</p>
                        <Link to="/ebse"><button className="button marg-t-xs">Learn more &rarr;</button></Link>
                    </div>
                </div>
            </div>
            <div className="projects-wrapper projects-wrapper--2">  
                <div className="projects-photo projects-photo--2">
                    <div className="projects-photo--2__showcase"></div>
                </div>          
                <div className="projects-text">
                    <div className="projects-text">
                        <h2>Intersect</h2>
                        <p>Intersect is a multifunctional mobile wallet concept that I brainstormed and wireframed with Affinity Designer, Invision, and Adobe XD from 2016-2018. The mobile wallet was built on three functional pillars (customer-merchant payment, peer-to-peer money transfer, and online payment) to deliver a fast, secure, and most importantly convenient experience.</p>
                        <Link to="/intersect"><button className="button marg-t-xs">Learn more &rarr;</button></Link>
                    </div>
                </div>
                
            </div>
            <div className="projects-wrapper projects-wrapper--3">
                <div className="projects-photo projects-photo--3">
                    <div className="projects-photo--3__showcase"></div>
                </div>
                <div className="projects-text">
                    <div className="projects-text">
                        <h2>Checkpoint Alpha</h2>
                        <p>Checkpoint Alpha is a mobile game that I developed with Objective-C and Cocos2d in 2015. The game had multiple levels, a Home Page, and a Level-Selection Page; the premise was to dodge obstacles and reach finish lines. A few nuances I had to deal with were the iOS accelerometer, particle systems, and collision-detection.</p>
                        <button className="button marg-t-xs">Coming soon &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}