import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import styles from '../public/styles.css'

import Layout from '../views/Layout.jsx';
import App from '../views/App.jsx';
import Contact from '../views/Contact.jsx'
import About from '../views/About.jsx'
import Writings from '../views/Writings.jsx'
import SomethingElse from '../views/SomethingElse.jsx'
import MultiPageApp from '../views/MultiPageApp.jsx'

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <Route path='SinglePageApp' component={App} />
            <Route path='multiPageApp' component={MultiPageApp} >
            
                <Route path='about' component={About} />
                <Route path='writings' component={Writings}></Route>
                <Route path='something-else' component={SomethingElse}></Route>
                <Route path='contact' component={Contact}></Route>
            </Route>
        </Route>
    </Router>
);
