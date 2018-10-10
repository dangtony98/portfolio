import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { Form, Field, reduxForm, formValueSelector } from 'redux-form';

const selector = formValueSelector('contact');

export class ContactSection extends Component {
    constructor(props) {
        super(props);
        
        this.renderInput = this.renderInput.bind(this);
        this.renderLongInput = this.renderLongInput.bind(this);
        this.renderTextArea = this.renderTextArea.bind(this);

        this.customHandler = this.customHandler.bind(this);
    }    

    customHandler(e) {
        console.log('SubmittedX');
        console.log(e.target);
    }
    
    renderInput({ type }){
        return (
            <input 
                type={type}
                className="contact-input"
                autoComplete="off"
                required
            ></input>
        );
    }

    renderLongInput({ type }){
        return (
            <input 
                type={type}
                className="contact-input contact-input--extended"
                autoComplete="off"
                required
            ></input>
        );
    }

    renderTextArea({ type }) {
        return (
            <textarea 
                type={type}
                className="contact-text-area" 
                required 
            />
        );
    }

    render() {
        const { handleSubmit } = this.props;
        console.log('CURRENT PROPS IS ', this.props);
        
        return (
            <div className="contact-section marg-t-l">
                <Element name="contact"><h2 className="section-header marg-b-l">&#45; Get in Touch &#45;</h2></Element>
                <Form className="contact-form" autoComplete="off" onSubmit={handleSubmit(this.customHandler)}>
                    <div className="contact-wrapper">
                        <div className="contact-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" component={this.renderInput} type="text" /> 
                        </div>
                        <div className="contact-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" component={this.renderInput} type="text" /> 
                        </div>
                    </div>
                    <div className="contact-group">
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" component={this.renderLongInput} type="text" />
                    </div>
                    <div className="contact-group">
                        <label htmlFor="subject">Subject</label>
                        <Field name="subject" component={this.renderLongInput} type="text" />
                    </div>
                    <div className="contact-group">
                        <label htmlFor="message">Message</label>
                        <Field name="message" component={this.renderTextArea} type="text" />
                    </div>
                    <div className="contact-footer">
                        <button 
                            type="submit" 
                            className="button contact-button marg-t-xs"
                        >Submit &rarr;</button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default connect((state) => selector(state, 'firstName', 'lastName'))(reduxForm({ form: 'contact' })(ContactSection));