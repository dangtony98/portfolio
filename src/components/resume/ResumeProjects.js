import React from 'react';
import ResumeHeading from './ResumeHeading';
import ResumeTab from './ResumeTab';

export default () => {
    return (
        <div className="marg-t-sm">
            <ResumeHeading title="Projects" />
            <ResumeTab 
                title="Want, Ithaca, NY"
                position={["Cofounder"]}
                date="September 2018 - Present"
                description={['Developing a web and mobile platform where people can post desires that others can fulfill in exchange for money; the application is being built on a React frontend and Laravel backend.', 'Created paper and digital wireframes using Adobe XD for the web interface; the wireframes consist of two main pages: Home Page and Profile Page.']}
            />
            <ResumeTab 
                title="EBSE, Ho Chi Minh City, Vietnam"
                position={["Frontend Web Developer"]}
                date="July 2018 - August 2018"
                description={['Created a responsive frontend for an imaginary ecommerce website using React and SaSS. The website consisted of five pages (Home, Search, Product, Login, and Signup Pages).', 'Integrated Redux for state management to store product, sort and filter, and shopping cart states.', 'Developed unique features including a multi-filter, drop-down menu and a real-time, accessible shopping cart to enhance UI/UX; I developed a custom algorithm to take into account sort and filter attribute prioritization.']}                
            />
            <ResumeTab 
                title="Intersect, Ithaca, NY"
                position={["Cofounder"]}
                date="August 2016 - May 2018"
                description={['Led a four-person team to address white paper, feasibility assessment, and legal components of a one-stop, user-service communications and transactions application.', 'Discovered 70% of the application framework and created wireframes using Affinity Designer, Invision, and Adobe XD to visualize application flow', 'Interviewed 15+ Cornell students for the startup’s CTO and developer positions.']}                
            />
            <ResumeTab 
                title="Checkpoint Alpha, Ho Chi Minh City, Vietnam"
                position={["iOS Developer"]}
                date="July 2015 - August 2015"
                description={['Programmed an iOS game involving a spaceship dodging different types of objects to reach finish lines using Objective-C and Cocos2d; the game made heavy-use of collision-detection.','Implemented tricky features such as pairing the iOS accelerometer with movement and using particle systems to produce visual effects.']}
            />
        </div>
    );
}
