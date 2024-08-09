import React from 'react';
import Image from 'next/image';
import './Home.css'
import { FaBehance, FaDribbble, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export const HomeSection = () => {
  return (
    <>
        <section id="home" className="homepage">
      <Image className="image" 	fill={true} src="/ITimage.jpg" alt="heroimage"/>
      <div className="herosection">
        <div className="textcontainer">
          <h1 className="splittype">Think IT, Think Next</h1>
        </div>
        <div className="textcontainer">
          <h2 className="splittype">Expert in IT Solutions </h2>
        </div>
        <div className="textcontainer">
          <p className="">
            At Think Next Innovation, Transforming ideas into innovative solutions. Partner with us to bring your
            visions to life and stay
            ahead in the digital landscape.
          </p>
        </div>
        <div className="herofooter">
          <FaFacebook />
          <FaLinkedin />
          <FaGithub/>
          <FaBehance/>
          <FaDribbble/>
        </div>
      </div>

    </section>
    </>
  );
};