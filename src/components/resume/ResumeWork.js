import React from 'react';
import ResumeHeading from './ResumeHeading';
import ResumeTab from './ResumeTab';

export default () => {
    return (
        <div className="marg-t-sm">
            <ResumeHeading title="Work Experience" />
            <ResumeTab 
                title="Cornell Consulting Club, Ithaca, NY"
                position={["Analyst"]}
                date="September 2017 - Present"
                description={['Selected to be an analyst of a highly-selective, student-run consulting firm at Cornell; the acceptance rate was 2.5%.', 'Reorganized a 623-initiative, KPI fundraising data dump into a structured database for a non-profit organization.', 'Conducted market-sizing and developed physical and digital marketing strategies for a rock climbing, Ithaca startup.']}
            />
            <ResumeTab 
                title="Life Changing Labs, Ithaca, NY"
                position={["Marketing Lead", "Graphic Designer"]}
                date="September 2017 - Present"
                description={['Designed banners to promote the organization’s startup pitch competition and training workshop events.']}                
            />
            <ResumeTab 
                title="Indochina Capital Corporation, Ho Chi Minh City, Vietnam"
                position={["Summer Intern"]}
                date="June 2015 - July 2015"
                description={['Compiled an eight-page market analysis report to accommodate strategic pricing and positioning for a prospective hotel construction project in Phu Quoc, Vietnam.', 'Collaborated with employees to investigate additional oil and automobile industries.']}
            />
        </div>
    );
}
