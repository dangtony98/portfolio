import React from 'react';
import ResumeHeading from './ResumeHeading';
import ResumeTab from './ResumeTab';

export default () => {
    return (
        <div className="marg-t-sm">
            <ResumeHeading title="Team Experience" />
            <ResumeTab 
                title="Life Changing Labs, Ithaca, NY"
                position="Member"
                date="September 2017 - Present"
                description={['Designed banners to promote the organization’s startup pitch competition and training workshop events.']}                
            />
        </div>
    );
}
