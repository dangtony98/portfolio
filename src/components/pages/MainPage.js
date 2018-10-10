import React, { Component } from 'react';
import OpenerSection from '../section/content/OpenerSection';
import AboutSection from '../section/content/AboutSection';
import OngoingSection from '../section/content/OngoingSection';
import ProjectsSection from '../section/content/ProjectsSection';
import ResumeSection from '../section/content/ResumeSection';
import ContactSection from '../section/content/ContactSection';
import Footer from '../footer/Footer';

export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    onFormSubmit(values) {
        console.log('Test');
        console.log(values);
    }

    render() {
        return (
            <div>
                <OpenerSection />
                <AboutSection />
                <OngoingSection />            
                <ProjectsSection />
                <ResumeSection />
                <ContactSection onSubmit={this.onFormSubmit} />
                <Footer />
            </div>
        );
    }
}
