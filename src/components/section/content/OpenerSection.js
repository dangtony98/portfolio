import React from 'react';
import NavigationBar from '../../navigation/NavigationBar';

export default () => {
    return (
        <div className="opener-section marg-b-l">
            <NavigationBar />
            <div className="opener-box">
                <h1 className="marg-b-sm">Building impactful products</h1>
                <h2>Tuan Dang</h2>
                <div className="opener-icons">
                    <i class="opener-icon fab fa-instagram"></i>       
                    <i class="opener-icon fab fa-linkedin"></i>
                    <i class="opener-icon fab fa-medium"></i>
                </div>
            </div>
        </div>
    );
}
