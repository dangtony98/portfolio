import React from 'react';
import { Element } from 'react-scroll';

export default () => {
    return (
        <div className="about-section marg-t-l marg-b-l">
            <Element name="about"><h2 className="section-header">&#45; About Me &#45;</h2></Element>
            <div className="about-wrapper">
                <div className="about-photo">
                </div>
                <div className="about-text">
                    <h2>Tuan (Tony) Dang</h2>
                    <p>I'm a sophomore studying at Cornell's School of Hotel Administration with an intended concentration in Finance, Accounting, and Real Estate (FARE) and a minor in computer science. I love the intersection of business and technology and possess a deep passion for software-related product design. My technical skillset lies in frontend web development, from wireframing with Adobe XD or Invision to developing applications with React/Redux; I also know Java and Python.</p>
                </div>
                
            </div>
        </div>
    );
}