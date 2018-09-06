import React from 'react';
import ResumeHeading from './ResumeHeading';

export default () => {
    return (
        <div>
            <ResumeHeading title="Education" />
            <div className="resume-main">
                <p className="resume-text"><strong>Cornell University</strong></p>
                <p>Expected May 2021</p>
            </div>
            <p className="resume-text marg-l-sm">B.S. Hotel Administration & Information Science</p>
            <p className="resume-text marg-l-sm">Concentrations in Finance, Interactive Technologies, and User Experience</p>
        </div>
    );
}
