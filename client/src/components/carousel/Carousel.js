import React from 'react'
import "./Carousel.css"
import Slider from "react-slick";
import TeamCard from '../teamCard/TeamCard'

const Carousel = (props) => {

    const {heading, cards} = props

    const settings = {
      dots: true,
      swipeToSlide: true,
      variableWidth: true,
      adaptiveHeight: true,
      infinite: true,
      slidesToShow: 1,
      initialSlide: 0,
      slidesToScroll: 1,
      arrows: false,
      // autoplay: true,
      speed: 600,
      autoplaySpeed: 3000,
      appendDots: (dots) => (
        <div>
          <ul style={{ marginTop: "0px" }}> {dots} </ul>
        </div>
      ),
    };

    return (
      <div className="carousel-container">
        <div className="header">
          <h1>{heading}</h1>
        </div>
        <div className="carousel">
          <Slider {...settings} >
            {cards.map((card)=>{
                return <TeamCard key={card.id} {...card} ></TeamCard>
            })}
          </Slider>
        </div>
      </div>
    );
}

export default Carousel
