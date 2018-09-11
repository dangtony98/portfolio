import React from 'react';
import { Element } from 'react-scroll';
import { Field, reduxForm } from 'redux-form';

export const ContactSection = () => {
    const renderInput = ({ type }) => {
        return (
            <input 
                type={type}
                className="contact-input"
                autoComplete="off"
            ></input>
        );
    }

    const renderLongInput = ({ type }) => {
        return (
            <input 
                type={type}
                className="contact-input contact-input--extended"
                autoComplete="off"
            ></input>
        );
    }

    const renderTextArea = () => {
        return (
            <textarea className="contact-text-area" />
        );
    }

    return (
    <div className="contact-section marg-t-l">
        <Element name="contact"><h2 className="section-header marg-b-l">&#45; Get in Touch &#45;</h2></Element>
        <form className="contact-form" autoComplete="off">
            <div className="contact-wrapper">
                <div className="contact-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component={renderInput} type="text" /> 
                </div>
                <div className="contact-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component={renderInput} type="text" /> 
                </div>
            </div>
            <div className="contact-group">
                <label htmlFor="email">Email Address</label>
                <Field name="email" component={renderLongInput} type="text" />
            </div>
            <div className="contact-group">
                <label htmlFor="subject">Subject</label>
                <Field name="subject" component={renderLongInput} type="text" />
            </div>
            <div className="contact-group">
                <label htmlFor="subject">Message</label>
                <Field name="subject" component={renderTextArea} type="text" />
            </div>
            <div className="contact-footer">
                <button className="button contact-button marg-t-xs">Submit &rarr;</button>
            </div>
        </form>
    </div>
    );
}

export default reduxForm({
    form: 'contact'
})(ContactSection);