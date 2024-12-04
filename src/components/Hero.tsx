import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(nameRef.current, {
      strings: ['Rajesh Logamani'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      loopCount: Infinity,
      backDelay: 2000
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1>Hi, I'm <span ref={nameRef}></span></h1>
          <p>Full Stack Developer specializing in modern web technologies</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="mailto:john@example.com">
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img src="/image/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;