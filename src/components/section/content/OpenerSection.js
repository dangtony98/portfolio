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
                    <a href="https://www.linkedin.com/in/tuan-d-a104a6125/">
                        <i class="opener-icon fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/dangtony98">
                        <i class="opener-icon fab fa-github"></i>
                    </a>
                    <a href="https://medium.com/@tonydang_47548">
                        <i class="opener-icon fab fa-medium"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
