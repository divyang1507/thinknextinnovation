import React from 'react'; 
import './Service.css'

export const ServiceSection= () => {
  return (
    <>
      <section id="service" class="servicepage">
        <div>
          <h2 class="serviceTitle">Services we Offer</h2>
          <div class="services">

            <div class="serviceBox" >

              <i class="fa-solid fa-layer-group"></i>
              <h4 class="servicehead">Web Design and Devlopment</h4>
                <p>Custom Website Design & Development: Crafting unique, responsive websites tailored to your brand,
                  including e-commerce with secure payment gateways.
                  CMS & Maintenance: Building on platforms like WordPress, with ongoing support to ensure seamless
                  performance and easy content updates.</p>
            </div>
            <div class="serviceBox">
              <i class="fa-solid fa-gear"></i>
              <h4 class="servicehead">Search Engine Optimization (SEO)</h4>
                <p>SEO & PPC Advertising: Boosting your website's search engine rankings and managing paid campaigns on
                  platforms like Google Ads to drive targeted traffic.
                  Social Media & Content Marketing: Engaging your audience on platforms like Facebook and Instagram,  creating valuable content and Email Marketing & Software Development</p>
            </div>
            <div class="serviceBox">
              <i class="fa-solid fa-database"></i>
              <h4 class="servicehead">Custom Software Developement</h4>
                <p>
                  Building software solutions tailored to your specific business needs.
                  Software Testing and Quality Assurance: Ensuring your software is bug-free and performs optimally
                  through rigorous testing.
                  Mobile Application Development
                </p>
            </div>
            <div class="serviceBox">
              <i class="fa-solid fa-code"></i>
              <h4 class="servicehead">IOS App Developement</h4>
                <p>Developing mobile applications for Apple's iOS platform.
                  Android App Development: Creating mobile applications for the Android platform.
                  Cross-Platform App Development: Building mobile applications that work seamlessly on both iOS and
                  Android devices.
                  IT Consulting</p>
            </div>
            <div class="serviceBox">
              <i class="fa-solid fa-chart-pie"></i>
              <h4 class="servicehead">IT Strategy and Planning</h4>
                <p>
                  Helping businesses develop effective IT strategies to achieve their goals.
                  Technology Assessment: Evaluating current technology systems and recommending improvements.
                  Digital Transformation Consulting: Assisting businesses in adopting digital technologies to enhance
                  operations and customer experience.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )}