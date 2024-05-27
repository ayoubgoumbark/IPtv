import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaWhatsapp } from 'react-icons/fa';
import 'react-round-carousel/src/index.css';

import About from "./components/aboute/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Slider2 from "./components/Slider2/Slider2";
import Reviews from "./components/Reviews/Reviews";
import Plans from "./components/Plans/Plans";
import Footer from "./components/Footer/Footer";


const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [darkMode, setDarkMode] = useState(true);
 
  const component = useRef(null);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
  
      const animateGallery = (selector, offsetX) => {
        const items = gsap.utils.toArray(`${selector} .cards li`);
        gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

        const animateFunc = element => {
          return gsap.timeline()
            .fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false })
            .fromTo(element, { xPercent: offsetX }, { xPercent: -offsetX, duration: 1, ease: "none", immediateRender: false }, 0);
        };

        const buildSeamlessLoop = (items, spacing, animateFunc) => {
          const rawSequence = gsap.timeline({ paused: true });
          const seamlessLoop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat() { this._time === this._dur && (this._tTime += this._dur - 0.01); },
            onReverseComplete() { this.totalTime(this.rawTime() + this.duration() * 100); }
          });
          const cycleDuration = spacing * items.length;

          items.concat(items).concat(items).forEach((item, i) => {
            const anim = animateFunc(items[i % items.length]);
            rawSequence.add(anim, i * spacing);
          });

          seamlessLoop.fromTo(rawSequence, { time: cycleDuration }, { time: `+=${cycleDuration}`, duration: cycleDuration, ease: "none" });
          return seamlessLoop;
        };

        const spacing = 0.1;
        const seamlessLoop = buildSeamlessLoop(items, spacing, animateFunc);
        const playhead = { offset: 0 };
        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
        const scrub = gsap.to(playhead, {
          offset: 0,
          onUpdate() { seamlessLoop.time(wrapTime(playhead.offset)); },
          duration: 0.3,
          ease: "power3",
          paused: true
        });

        ScrollTrigger.create({
          onUpdate(self) {
            scrub.vars.offset = self.progress * seamlessLoop.duration();
            scrub.invalidate().restart();
          },
          start: "top 30%",
          end: "top",
          trigger: selector,
        });
      };

      animateGallery('.gallery', 400);
      animateGallery('.gallery2', -400);

      gsap.to('.home', {
        scrollTrigger: {
          trigger: '.home',
          start: 'top top',
          pin: true,
          pinSpacing: false,
          end: "50%"
        }
      });
    
  }, []);

  return (
    <>
     {/*  {loading && <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={Loading} alt="Loading" />} */}
      <div ref={component} className={`${darkMode ? 'dark' : ''}  overflow-hidden`}>
        <Navbar setDarkMode={toggleDarkMode} />
        <Home darkMode={darkMode} />
        <Slider />
        <Slider2 />
        <About darkMode={darkMode} />
        <Plans />
        <Reviews />
        <Footer />
        <a
          href="https://wa.me/yourPhoneNumber"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={35} />
        </a>
      </div>
    </>
  );
};

export default App;
