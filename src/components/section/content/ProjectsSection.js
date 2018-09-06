import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ProjectsText from '../../projects/ProjectsText';

export default () => {
    return (
        <div className="projects-section marg-t-l">
            <Element name="projects"><h2 className="section-header marg-b-l">&#45; Recent Projects &#45;</h2></Element>
            <div className="projects-wrapper marg-b-l">
                <div className="projects-photo projects-photo--1">
                    <div className="projects-photo--1__showcase"></div>
                </div>
                <div className="projects-text">
                    <ProjectsText
                        title="EBSE"
                        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                    />
                    <Link to="/ebse"><button className="button marg-t-xs">Learn more &rarr;</button></Link>
                </div>
            </div>
            <div className="projects-wrapper marg-b-l">            
                <div className="projects-text">
                    <ProjectsText
                        title="Intersect"
                        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                    />
                    <Link to="/intersect"><button className="button marg-t-xs">Learn more &rarr;</button></Link>
                </div>
                <div className="projects-photo projects-photo--2">
                    <div className="projects-photo--2__showcase"></div>
                </div>
            </div>
            <div className="projects-wrapper">
                <div className="projects-photo projects-photo--3">
                    <div className="projects-photo--3__showcase"></div>
                </div>
                <div className="projects-text">
                    <ProjectsText
                        title="Checkpoint Alpha"
                        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                    />
                    <button className="button marg-t-xs">Learn more &rarr;</button>
                </div>
            </div>
        </div>
    );
}