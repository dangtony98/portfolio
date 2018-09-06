import React from 'react';
import ResumeHeading from './ResumeHeading';
import ResumeTab from './ResumeTab';

export default () => {
    return (
        <div className="marg-t-sm">
            <ResumeHeading title="Work Experience" />
            <ResumeTab 
                title="Cornell Consulting Club, Ithaca, NY"
                position="Analyst"
                date="September 2017 - Present"
                description={['Selected to be an analyst of a highly-selective, student-run consulting firm at Cornell; the acceptance rate was 2.5%', 'Reorganized a 623-initiative, KPI fundraising data dump into a structured database for a non-profit organization.']}
            />
            <ResumeTab 
                title="Intersect Startup, Ithaca, NY"
                position="Cofounder"
                date="August 2016 - Present"
                description={['Led a four-person team to address white paper, feasibility assessment, and legal components of a one-stop, user-service communications and transactions application aimed to release around Fall 2018.', 'Discovered 70% of the application framework and created wireframes to visualize application flow', 'Interviewed 15+ Cornell students for the startup’s CTO and developer positions.']}                
            />
            <ResumeTab 
                title="Indochina Capital Corporation, Ho Chi Minh City, Vietnam"
                position="Summer Intern"
                date="June 2015 - July 2015"
                description={['Compiled an eight-page market analysis report to accommodate strategic pricing and positioning for a prospective hotel construction project in Phu Quoc, Vietnam.', 'Collaborated with employees to investigate additional oil and automobile industries.']}
            />
        </div>
    );
}
