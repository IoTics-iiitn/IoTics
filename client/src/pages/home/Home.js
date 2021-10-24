import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Form from '../../components/form/Form';

const Home = () => {
    return (
        <div>
            {/* <Hero />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' />
                    <Route path='/about-us' component={About} />
                </Switch>
            </Router> */}
        <Form></Form>
        </div>
    )
}

export default Home
