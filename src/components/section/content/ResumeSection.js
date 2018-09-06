import React from 'react';
import { Element } from 'react-scroll';
import ResumeEducation from '../../resume/ResumeEducation';
import ResumeWork from '../../resume/ResumeWork';
import ResumeTeam from '../../resume/ResumeTeam';

export default () => {
    return (
        <div className="resume-section">
            <Element name="resume"><h2 className="section-header marg-b-l">&#45; Resume &#45;</h2></Element>
            <div className="resume">
                <ResumeEducation />
                <ResumeWork />
                <ResumeTeam />
            </div>
        </div>
    );
}
