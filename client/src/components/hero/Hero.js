import React, {useState, useEffect, useRef, useContext} from 'react'

import logo from './assets/logo.png'
import {ReactComponent as BgSvg} from "./assets/background-large.svg"

import "./Hero.css"
import { VisibilityContext } from "../../App";


const Hero = (props) => {

    // const [isVisible, setIsVisible] = useState(false)
    const logoRef = useRef(null)
    const { visibility, setVisibility } = useContext(VisibilityContext);


    const callback = (entries)=>{
        const [entry] = entries
        setVisibility(entry.isIntersecting)
    }


    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }

    useEffect(()=>{
      const observer = new IntersectionObserver(callback, options);
      if(logoRef.current) observer.observe(logoRef.current);

        return ()=>{
          if(logoRef.current) observer.unobserve(logoRef.current)
        }

    }, [options, logoRef])

    return (
        <div className="hero-container">
          <div className="hero-content">
            <img ref={logoRef} className="head-logo" src={logo} alt="logo" />
            <div className="hero-text">
              <h1>
                Streamlining <br /> Your IOT <br /> Needs...
              </h1>
            </div>
          </div>
        </div>
    );
}

export default Hero