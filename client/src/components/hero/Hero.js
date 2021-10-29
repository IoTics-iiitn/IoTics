import React, {useEffect, useRef, useContext} from 'react'

import logo from './assets/logo.png'

import "./Hero.css"
import { VisibilityContext } from "../../App";
import { Spring, animated } from "react-spring";


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
          <Spring
            from={{ opacity: 0, transform: "rotateZ(500deg) scale(0)" }}
            to={{ opacity: 1, transform: "rotateZ(0deg) sclae(1)" }}
          >
            {(styles) => (
              <animated.div style={styles}>
                <img
                  ref={logoRef}
                  className="head-logo"
                  src={logo}
                  alt="logo"
                />
              </animated.div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, transform: "translate(0,-5rem)" }}
            to={{ opacity: 1, transform: "translate(0,0rem)" }}
            delay={500}
          >
            {(styles) => (
              <animated.div style={styles}>
                <div className="hero-text">
                  <h1>
                    Streamlining <br /> Your IOT <br /> Needs...
                  </h1>
                </div>
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    );
}

export default Hero