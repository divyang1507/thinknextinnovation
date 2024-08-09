import React from 'react'
import './About.css'
import { FaArrowRight } from 'react-icons/fa'

export const AboutSection = () => {
  return (
   <>
     <section id="about" class="aboutpage">
       <h2 class="aboutTitle">About us</h2>
       <div class="aboutContainer">
         <div class="aboutBox">
           <h4>
             At Think Next Innovation, we are passionate about providing top-tier IT solutions that drive success for our
             clients. Our team of skilled professionals is dedicated to delivering projects on time, every time. With a
             commitment to excellence and innovation, we ensure that your technology needs are met with the highest
             standards of quality and reliability.
           </h4>
         </div>

         <div class="valueContainer">
           <h3>Our Core Values:</h3>
           <div class="valueblock">
             <div class="valueHeading">
               <h3>Innovation</h3>
               <p class="paragraph">Pioneering the latest technologies to create superior solutions.</p>
             </div>
           <div className='icon'><FaArrowRight /></div>
           </div>
           <div class="valueblock">
             <div class="valueHeading">
               <h3> Reliability</h3>
               <p>Consistently meeting deadlines and project goals.</p>
             </div>
           <div className='icon'><FaArrowRight /></div>
           </div>
           <div class="valueblock">
             <div class="valueHeading">
               <h3>Quality</h3>
               <p class="paragraph"> Upholding the highest standards in every project.</p>
             </div>
           <div className='icon'><FaArrowRight /></div>
           </div>
           <div class="valueblock">
             <div class="valueHeading">
               <h3>Partnership</h3>
               <p>Collaborating closely with clients to understand and achieve their goals.</p>
             </div>
           <div className='icon'><FaArrowRight /></div>
           </div>
         </div>

       </div>
     </section>

   </>
  )
}
