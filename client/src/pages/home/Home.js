import React, { useEffect } from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import UpcomingEvents from "../../components/upcomingEvents/UpcomingEvents";
import AboutUs from "../../components/aboutUs/AboutUs";
import ProjectVideo from "../../components/projectVideo/ProjectVideo";
import Form from "../../components/form/Form";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div id="home">
      <Hero />
      <div data-aos-duration="800" data-aos="zoom-in-up">
        <UpcomingEvents></UpcomingEvents>
      </div>
      <div data-aos-duration="800" data-aos="fade-up">
        <AboutUs></AboutUs>
      </div>
      <div data-aos-duration="800" data-aos="fade-up">
        <ProjectVideo></ProjectVideo>
      </div>
      <Form></Form>
    </div>
  );
};

export default Home;
