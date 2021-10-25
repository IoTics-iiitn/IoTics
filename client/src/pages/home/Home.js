import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import UpcomingEvents from "../../components/upcomingEvents/UpcomingEvents";
import AboutUs from "../../components/aboutUs/AboutUs";
import Form from "../../components/form/Form";

const Home = () => {
  return (
    <div>
      <Hero />
      <UpcomingEvents></UpcomingEvents>
      <AboutUs></AboutUs>
      <Form></Form>
    </div>
  );
};

export default Home;
