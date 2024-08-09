"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container }); // we can pass in a config object as the 1st parameter to make scoping simple

  const toggleMenu = contextSafe(() => {
    setisOpen(!isOpen);
    let narrownav = gsap.matchMedia();
    narrownav.add("(max-width: 800px)", () => {
      if (isOpen == true) {
        // Hide the menu
        gsap.timeline().to(".navLink", {
          x: -100,
          opacity: 0,
          delay: 0.2,
          color: "#ffffff",
          stagger: 0.3
  
        }).to('.navmenu', {
          opacity: 0, // Fade out
          duration: 0.3,
          y: -100,
          display:'none'
        //   onComplete: () => navMenu.style.display = 'none'
        })
      } else {
        // Show the menu
        gsap.timeline().to(".navmenu", {
          display: "flex", // Show menu
          opacity: 1, // Fade in
          backgroundColor: "#000000",
          color: "#ffffff",
          duration: 0.3,
          y: 0
        }).to(".navLink", {
          x: 0,
          opacity: 1,
          delay: 0.2,
          color: "#ffffff",
          stagger: 0.3
        });
      }
    })
  });


  return (
    <>
      <nav ref={container}>
        <h3 className="logo">
          <Link href="#home" className="link">
            <Image
              src="/NextLogo.png"
              alt="Girl in a jacket"
              width={50}
              height={50}
            />
            Think Next Innovation
          </Link>
        </h3>
        <button
        
          className="navbutton"
          id="navbutton"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <div className="navmenu">
          <Link href="#home" className="navLink">Home</Link>
          <Link href="" className="navLink">Service</Link>
          <Link href="#about" className="navLink">About</Link>
          <Link href="" className="navLink">Contact</Link>
        </div>
      </nav>
    </>
  );
};
