import React from 'react';
import NavigationWant from '../navigation/NavigationWant';

export default () => {
    return (
        <div className="want-opener">
            <NavigationWant />
            <div className="want-opener-box">
                <div>
                    <h1 className="marg-b-sm">Want</h1>
                    <h2>Coming soon</h2>
                </div>
            </div>
        </div>
    );
}