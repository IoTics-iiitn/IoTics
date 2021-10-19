import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import About from '../about/About'
import UpcomingEvents from '../../components/upcomingEvents/UpcomingEvents'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero />
             <UpcomingEvents/> 
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' />
                    <Route path='/about' component={About} />
                </Switch>
            </Router>
        </div>
    )
}

export default Home