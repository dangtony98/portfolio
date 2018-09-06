import React from 'react';
import NavigationEBSE from '../navigation/NavigationEBSE';

export default () => {
    return (
        <div className="ebse-opener">
            <NavigationEBSE />
            <div className="ebse-opener-box">
                <div>
                    <h1 className="marg-b-sm">EBSE</h1>
                    <h2>An ecommerce React/Redux frontend prototype</h2>
                </div>
                <div className="ebse-opener-images">
                    <div className="ebse-opener-images--1"></div>
                    <div className="ebse-opener-images--2"></div>
                </div>
            </div>
        </div>
    );
}
