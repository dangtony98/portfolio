import React, { Component } from 'react';
import WantOpenerSection from '../want/WantOpenerSection';

export default class WantPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <WantOpenerSection />
            </div>
        );
    }
}