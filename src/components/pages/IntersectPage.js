import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import IntersectOpenerSection from '../intersect/IntersectOpenerSection.js';
import GenericSection from '../section/part/GenericSection';
import IntersectIdeationSection from '../intersect/IntersectIdeationSection';
import Footer from '../footer/Footer';

export default class IntersectPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <IntersectOpenerSection />
                <GenericSection 
                    title="&#45; Background &#45;" 
                    text={["In 2016, I sought to develop an improved concept for some existing industry landscape. While researching, I noticed a significant discrepancy in the performance of Western mobile payment platforms compared to Asian ones. This fascination led to a 2-year pursuit of an integrated concept to increase engagement in this fintech space. Although this project is currently on the back-burner due to complexity issues (related to technical, financial, and legal feasibility), I hope that it will be implemented by myself or others in the near future"]}
                    sectionName="intersect-background"
                />
                <GenericSection 
                    title="&#45; Problem &#45;" 
                    text={["In most places, people are still accustomed to using cash or card to pay for goods and services; in a rapidly digitalizing, mobile world, this is a problem. While this problem presents a clear opportunity gap, no fintech player has successfully penetrated this market: user adoption and retention remain low.", "To note, today's mobile wallets are fragmented in functionality. Some offer money transfer services; others provide on-spot payment services. Despite the existence of numerous mobile wallets in the market, none provide the comprehensive, fintech package necessary for people to live securely and comfortably."]}
                    sectionName="intersect-problem"
                />
                <GenericSection 
                    title="&#45; Solution &#45;" 
                    text={["So I invented Intersect, a multifunctional mobile wallet concept built with proven frameworks to optimize security and convenience. Beyond payment, the platform includes features ranging from data analytics, smart purchase logbook, and rewards system auto-tracking that can be viewed as seamless extensions of the product's core."]}
                    sectionName="intersect-solution"
                />
                <p className="section-text">Don't care for the process? 
                    <ScrollLink to="intersect-wireframing" smooth={true} offset={-75} duration={1000}> <span className="intersect-link">Skip</span></ScrollLink> to wireframe showcase.</p>
                <IntersectIdeationSection />
                <GenericSection 
                    title="&#45; Development &#45;" 
                    text={["Having completed ideation, it was time to start developing the product. As a business major, I began by creating a pitch-deck; I knew that a presentation would be necessary if I were to ever introduce the project to a third party."]}
                    sectionName="intersect-development"
                />
                <div className="intersect-development-image intersect-development-image--1"></div>
                <div className="intersect-development-image intersect-development-image--2"></div>
                <div className="intersect-development-image intersect-development-image--3"></div>
                <p className="section-text">Unfortunately this is where my two-year Intersect journey came to a halt. Faced with financial, technical, and legal execution restrictions, I lacked the resources and infrastructure to develop the mobile wallet. While I've left this project on the back-burner this past few months, I'm working to build the skills, expertise, and experience needed to perhaps finish what I started in the future. Starting with learning React/Redux in Summer 2018, I aim to endlessly build products and ultimately contribute an impactful technology to the world.</p>
                <GenericSection 
                    title="&#45; What I Learned &#45;" 
                    text={["My 2-year pursuit creating a mobile wallet concept taught me hundreds of project management and design lessons. I share three of them below:"]}
                    sectionName="intersect-takeaways"
                />
                <ul className="section-list">
                    <li className="section-list-item"><strong>Iterate</strong>: When I first started working on Intersect, I wanted to build the perfect V1 – the application flow and design had to be immaculate. While I thought my first wireframes in Affinity Designer were somewhat impressive, I knew that they were far from being industry caliber designs. As such, I strove to improve my designs by analyzing industry UI/UX trends and upgrading my prototyping toolbox. Throughout the following year, I revised the original designs twice for a total of three copies spread across Affinity Designer, Invision, and Adobe XD. If there's one thing I've learned thus far: architecting a project is a prolonged, iterative journey.</li>
                    <li className="section-list-item"><strong>Simplify</strong>: Being a complex, multifunctional application on the backend, Intersect needed frontend simplification. As an avid observer of user experiences, I understood that interface simplicity would be key to user attraction and retention on the platform; beyond being functional, the application had to be easy to use. This user-oriented mindset paid off as I arrived at a clean, beautiful design by my third Intersect iteration.</li>
                    <li className="section-list-item"><strong>Think Logically</strong>: There were times when I had an urge or two to add features for aesthetic or "cool" reasons; I'm glad that I never proceeded with them and only stuck with features that I deemed imperative to application functionality. For example, I once considered adding an Intersect-utilization, local leaderboard because gamification was a hot concept. While unique for a fintech application, the feature was impractical considering it would reward wealthy individuals for spending more on the platform. These mistakes reminded me to stay logical as I learned to develop practical features.</li>
                </ul>
                <p className="section-text">Please contact me for additional project inquiries!</p>
                <Footer />
            </div>
        );
    }  
}