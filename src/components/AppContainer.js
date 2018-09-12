import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntersectPage from './pages/IntersectPage';
import EBSEPage from './pages/EBSEPage';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />            
                <Route path="/ebse" component={EBSEPage} />
                <Route path="/intersect" component={IntersectPage} />
            </Switch>
        </Router>
    );
}