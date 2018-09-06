import React from 'react';
import { Element } from 'react-scroll';

export default () => {
    return (
        <div className="about-section marg-t-l marg-b-l">
            <Element name="about"><h2 className="section-header marg-b-l">&#45; About Me &#45;</h2></Element>
            <div className="about-wrapper">
                <div className="about-text">
                    <h2>Tuan (Tony) Dang</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>
                <div className="about-photo">
                </div>
            </div>
        </div>
    );
}