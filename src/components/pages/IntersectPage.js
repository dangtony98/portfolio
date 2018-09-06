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
                text={["Some text XYZ"]}
                sectionName="intersect-learned"
            />
                <Footer />
            </div>
        );
    }  
}