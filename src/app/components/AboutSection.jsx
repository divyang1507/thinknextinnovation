"use client";
import React, { useState } from "react";
import "./About.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ValueBlock } from "./ValueBlock";

export const AboutSection = () => {
 
  const blocks = [
    {
      heading: "Innovation",
      para:
        "Pioneering the latest technologies to create superior solutions.",
    },
    {
      heading: "Creativity",
      para: "Unleashing imagination to produce exceptional designs.",
    },
    {
      heading: "Sustainability",
      para: "Integrating eco-friendly practices into every process.",
    },
  ];

  return (
    <>
      <section id="about" className="aboutpage">
        <h2 className="aboutTitle">About us</h2>
        <div className="aboutContainer">
          <div className="aboutBox">
            <h4>
              At Think Next Innovation, we are passionate about providing
              top-tier IT solutions that drive success for our clients. Our team
              of skilled professionals is dedicated to delivering projects on
              time, every time. With a commitment to excellence and innovation,
              we ensure that your technology needs are met with the highest
              standards of quality and reliability.
            </h4>
          </div>

          <div className="valueContainer">
            <h3>Our Core Values:</h3>

            {blocks.map((block, index) => (
              <ValueBlock
                key={index}
                heading={block.heading}
                para={block.para}
              />
            ))}

            {/* <div className="valueblock">
              <div className="valueHeading">
                <h3> Reliability</h3>
                <p
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  Consistently meeting deadlines and project goals.
                </p>
              </div>
              <div className="icon">
                <FaArrowRight />
              </div>
            </div>
            <div className="valueblock">
              <div className="valueHeading">
                <h3>Quality</h3>
                <p className="paragraph">
                  {" "}
                  Upholding the highest standards in every project.
                </p>
              </div>
              <div className="icon">
                <FaArrowRight />
              </div>
            </div>
            <div className="valueblock">
              <div className="valueHeading">
                <h3>Partnership</h3>
                <p>
                  Collaborating closely with clients to understand and achieve
                  their goals.
                </p>
              </div>
              <div className="icon">
                <FaArrowRight />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
