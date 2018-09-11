import React from 'react';
import NavigationIntersect from '../navigation/NavigationIntersect';

export default () => {
    return (
        <div className="intersect-opener">
            <NavigationIntersect />
            <div className="intersect-opener-box">
                <div>
                    <h1 className="marg-b-sm">Intersect</h1>
                    <h2>A multifunctional mobile wallet concept</h2>
                </div>
                <div className="intersect-opener-images">
                    <div className="intersect-opener-images--1"></div>
                    <div className="intersect-opener-images--2"></div>
                </div>
            </div>
        </div>
    );
}
