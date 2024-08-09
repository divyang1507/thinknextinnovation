import React from 'react';
import './Contact.css'

export const ContactSection = ()=>{
  return(<>
    <section id="contact" className="contactpage">
      <div className="">
        <h2 className="contactTitle">
          Contact us
        </h2>
        <h4 className="contactText">Let's Connect and Create Something Amazing Together We look forward to collaborating with
          you.
        </h4>
        <div className="contactContainer">
          <div className="contactBox">
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
          <div className="contactright">
            <form>
              <div className="inputbox">
                <input type="text" required />
                <label for="name"> Name</label>
              </div>
              <div className="inputbox">
                <input type="email" required />
                <label for="name"> Email</label>
              </div>
              <div className="inputbox">
                <textarea type="text" required></textarea>
                <label for="name"> Message</label>
              </div>
              <button className="btn"> Contact us
              </button>

            </form>

          </div>

        </div>


      </div>




    </section>
  </>)
} 