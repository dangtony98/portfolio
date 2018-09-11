import React from 'react';
import ResumeHeading from './ResumeHeading';
import ResumeTab from './ResumeTab';

export default () => {
    return (
        <div>
            <ResumeHeading title="Education" />
            <ResumeTab
                title="Cornell University"
                position={['B.S. Hotel Administration', 'Concentration in Finance, Accounting, and Real Estate', 'Minor in Computer Science']}
                date="Expected May 2021"
                description={["Relevant Coursework: Finance, Object-Oriented Programming & Data Structures"]} 
            />
        </div>
    );
}
