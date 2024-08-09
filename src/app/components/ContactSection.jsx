import React from 'react';
import './Contact.css'

export const ContactSection = ()=>{
  return(<>
    <section id="contact" class="contactpage">
      <div class="">
        <h2 class="contactTitle">
          Contact us
        </h2>
        <h4 class="contactText">Let's Connect and Create Something Amazing Together We look forward to collaborating with
          you.
        </h4>
        <div class="contactContainer">
          <div class="contactBox">
            <h3>
              Get in Touch
            </h3>
            <h4>
              Email: info@thinknextinnovation.com
            </h4>
            <h4>
              Phone: +91 999 999 999

            </h4>
            <h4>
              Location: Ahmedabad, Gujarat, India
            </h4>


          </div>
          <div class=contactright>
            <form>
              <div class="inputbox">
                <input type="text" required />
                <label for="name"> Name</label>
              </div>
              <div class="inputbox">
                <input type="email" required />
                <label for="name"> Email</label>
              </div>
              <div class="inputbox">
                <textarea type="text" required></textarea>
                <label for="name"> Message</label>
              </div>
              <button class="btn"> Contact us
              </button>

            </form>

          </div>

        </div>


      </div>




    </section>
  </>)
} 