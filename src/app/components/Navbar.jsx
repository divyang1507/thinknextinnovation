"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "scrolltrigger";

export const Navbar = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const [isOpen, setisOpen] = useState(false);
  const navRef = useRef(null);
  // const navRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: navRef }); // we can pass in a config object as the 1st parameter to make scoping simple

  const toggleMenu = contextSafe(() => {
    setisOpen(!isOpen);
    let narrownav = gsap.matchMedia();
    narrownav.add("(max-width: 800px)", () => {
      if (isOpen == true) {
        // Hide the menu

        gsap
          .timeline()
          .to(".navLink", {
            x: -100,
            opacity: 0,
            delay: 0.2,
            color: "#ffffff",
            stagger: 0.3,
          })
          .to(".navmenu", {
            opacity: 0, // Fade out
            duration: 0.3,
            y: -100,
            display: "none",
            //   onComplete: () => navMenu.style.display = 'none'
          });
      } else {
        // Show the menu
        gsap
          .timeline()
          .to(".navmenu", {
            display: "flex", // Show menu
            opacity: 1, // Fade in
            backgroundColor: "#000000",
            color: "#ffffff",
            duration: 0.3,
            y: 0,
          })
          .to(".navLink", {
            x: 0,
            opacity: 1,
            delay: 0.2,
            color: "#ffffff",
            stagger: 0.3,
          });
      }
    });
  });

  // useGSAP(
  // gsap.to(navRef.ref, {
  //   backgroundColor: "#000000",
  //   duration: 0.5,
  //   ScrollTrigger: {
  //     trigger: navRef.ref,
  //     start: "top -10%",
  //     end: "top -11%",
  //     scrub: true,
  //     markers: true
  //   },
  // });
  // navRef,
  // {
  //   from: { opacity: 0, y: 100 },
  //   to: { opacity: 1, y: 0, duration: 1 },
  //   // to: {
  //   //   backgroundColor: "#000000",
  //   //   duration: 0.5,
  //   // },
  // },
  // {
  //   start: "top -10%",
  //   end: "top -11%",
  //   scrub: true,
  //   markers: true,
  //   id: 'boxAnimation',
  // }
  // );

  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: "#000000",
      duration: 0.5,
      ScrollTrigger: {
        trigger: 'navbar',
        start: "top -10%",
        end: "top -11%",
        scrub: true,
        markers: true,
      },
    });
  });
  return (
    <>
      <nav className="navbar" ref={navRef}>
        <h3 className="logo">
          <Link href="#home" className="link">
            <Image src="/NextLogo.png" alt="TNI_Logo" width={50} height={50} />
            Think Next Innovation
          </Link>
        </h3>
        <button className="navbutton" id="navbutton" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className="navmenu">
          <Link href="#home" scroll={true} className="navLink">
            Home
          </Link>
          <Link href="#service" scroll={true} className="navLink">
            Service
          </Link>
          <Link href="#about" scroll={true} className="navLink">
            About
          </Link>
          <Link href="#contact" scroll={true} className="navLink">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};
