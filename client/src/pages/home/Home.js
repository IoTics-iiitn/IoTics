import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import UpcomingEvents from "../../components/upcomingEvents/UpcomingEvents";
import Hero from "../../components/hero/Hero";
import Form from "../../components/form/Form";

const Home = () => {
  return (
    <div>
      <Hero />
      <Form></Form>
    </div>
  );
};

export default Home;
