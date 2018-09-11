import React, { Component } from 'react';
import OpenerSection from '../section/content/OpenerSection';
import AboutSection from '../section/content/AboutSection';
import OngoingSection from '../section/content/OngoingSection';
import ProjectsSection from '../section/content/ProjectsSection';
import ResumeSection from '../section/content/ResumeSection';
import ContactSection from '../section/content/ContactSection';
import Footer from '../footer/Footer';

export default class MainPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <OpenerSection />
                <AboutSection />
                <OngoingSection />            
                <ProjectsSection />
                <ResumeSection />
                <ContactSection />
                <Footer />
            </div>
        );
    }
}
