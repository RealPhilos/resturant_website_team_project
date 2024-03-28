"use client";

import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from "@/app/providers/auth";
import { useState, useEffect, useContext } from 'react';
import OrderButton from "@/app/components/order-now-button";

export default function Information() {

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const userType = user ? user.role : null;
  const username = user ? user.username : null;

  return (
    <div>
      <Head>
        <title>Oaxaca Restaurant</title>
        <meta name="description" content="This is the Oaxaca Restaurant Information" />
        <link/>
      </Head>
      
      <main>
      <div
  style={{ 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center" 
  }}>
        <div className="py-6 flex justify-between items-end">
          <div className="flex items-end">
            <span className="text-5xl font-serif">
              Information and Updates
            </span>
          </div>
        </div>
        </div>

        <br></br>
        <hr />
        <br></br>
        <Fade>
  <h1 className="text-2xl font-serif mb-4" style={{ textAlign: "center" }}>
    {" "}
    Quick Navigation{" "}
  </h1>
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

    <ScrollLink to="aboutUs" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>About Us</button>
    </ScrollLink>

    <ScrollLink to="facilities" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000",
        }}>Facilities</button>
    </ScrollLink>

    <ScrollLink to="careers" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>Careers</button>
    </ScrollLink>

    <ScrollLink to="more" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>More Oaxaca</button>
    </ScrollLink>

    <ScrollLink to="help" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>Help</button>
    </ScrollLink>

    <ScrollLink to="FAQs" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>FAQ's</button>
    </ScrollLink>
  </div>
</Fade>

        <br></br>
        <hr />
        <br></br>
        
        <div 
        id = "aboutUs"
        style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <img
          src="/target.png" 
          alt="Our Mission" 
          style={{ width: "20%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Our Mission</h1>
            <p>About Us</p>
            <br></br>
            <h3 className="text-m font-serif">
            Oaxaca aims to provide the world with quality food and service.</h3>
            <h3 className="text-m font-serif"> Ensuring our food is prepared with the freshest ingredients.</h3>
            <h3 className="text-m font-serif">And striving to create a memorable experience for every guest.</h3>
          </div>
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>
        

        <div style={{ 
        backgroundColor: "#FAFAF5",
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <div style={{ 
            width: "50%", 
            display: "flex", 
            flexDirection: "column", 
             alignItems: "center", 
            justifyContent: "center",
         }}>
            <h1 className="text-3xl font-serif">Location and Open Hours</h1>
            <p>About Us</p>
            <br></br>
            <h3 className="text-m font-serif">
            Located in the heart of London.</h3>
            <h3 className="text-m font-serif"> 123 London Road LD1 23N, United Kindom.</h3>
            <h3 className="text-m font-serif"> Easily accessible via public transportation.</h3>
            <br></br>
            <h3 className="text-m font-serif"> Opening Times:</h3>
            <h3 className="text-m font-serif"> Mon-Thurs: 07:00 - 17:00</h3>
            <h3 className="text-m font-serif"> Fri-Sun: 08:30 - 23:30</h3>
          </div>
          <img
          src="/location.png" 
          alt="Our Location" 
          style={{ width: "25%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <img
          src="/open.png" 
          alt="Our Location" 
          style={{ width: "30%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        id="facilities"
        style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <img
          src="/freeParking.png" 
          alt="Parking" 
          style={{ width: "30%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Free Parking</h1>
            <p>Facilities</p>
            <br></br>
            <h3 className="text-m font-serif">
            Free, spacious and secure parking area.</h3>
            <h3 className="text-m font-serif">Dedicated spaces for disabled guests.</h3>
            <h3 className="text-m font-serif">Electric vehicle charging stations.</h3>
            <h3 className="text-m font-serif"> Well lit area with monitored security cameras. </h3>
          </div>
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",
        backgroundColor: "#FAFAF5",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <div style={{ 
            width: "40%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">High Chairs</h1>
            <p>Facilities</p>
            <br></br>
            <h3 className="text-m font-serif">
            Seating for younger guests aged 2 and under.</h3>
            <h3 className="text-m font-serif">Different sizes available to suit your needs.</h3>
            <h3 className="text-m font-serif">Cleaned and sanitized after each use.</h3>
          </div>
          <img
          src="/highChair.png" 
          alt="High Chair" 
          style={{ width: "30%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <img
          src="/freeWifi.png" 
          alt="Wifi" 
          style={{ width: "25%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">High-Speed Wifi</h1>
            <p>Facilities</p>
            <br></br>
            <h3 className="text-m font-serif">
            Enjoy uninterrupted browsing while you dine with us.</h3>
            <h3 className="text-m font-serif">Simply ask our staff for the network name and password.</h3>
          </div>
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        id="careers"
        style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",
        backgroundColor: "#FAFAF5",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Become A Chef</h1>
            <p>Careers</p>
            <br></br>
            <button className="bg-red-700 text-white px-3 py-2 rounded-md">Applications Closed</button>
          </div>
          <img
          src="/chef.jpeg" 
          alt="Chef" 
          style={{ width: "30%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <img
          src="/waiter.jpeg" 
          alt="Waiter" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Become A Waiter/Waitress</h1>
            <p>Careers</p>
            <br></br>
            <button className="bg-red-700 text-white px-3 py-2 rounded-md">Applications Closed</button>
          </div>
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        id = "more"
        style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",
        backgroundColor: "#FAFAF5",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <div 
          style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Follow Us</h1>
            <p>More Oaxaca</p>
            <br></br>
            <h3 className="text-m font-serif">
            Keep up to date with Oaxaca.</h3>
            <h3 className="text-m font-serif">Be the first to know about new foods and updates.</h3>
          </div>
          <img
          src="/socialMedia.png" 
          alt="Social Media" 
          style={{ width: "50%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <img
          src="/app.png" 
          alt="Parking" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">App Coming Soon!</h1>
            <p>More Oaxaca</p>
            <br></br>
            <h3 className="text-m font-serif">
            Order through your phone.</h3>
            <h3 className="text-m font-serif">
            Keep track of the menu in real time.</h3>
            <h3 className="text-m font-serif">
            Follow our social media to stay up to date.</h3>
          </div>
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        id = "help"
        style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",
        backgroundColor: "#FAFAF5",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <div 
          style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Special Offers and Events</h1>
            <p>Help</p>
            <br></br>
            <h3 className="text-m font-serif">Currently No Offers.</h3>
            <h3 className="text-m font-serif">Currently No Events.</h3>
          </div>
          <img
          src="/offers.png" 
          alt="Special Offers" 
          style={{ width: "30%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <img
          src="/contactUs.png" 
          alt="Contact Us" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Contact Us</h1>
            <p>Help</p>
            <br></br>
            <h3 className="text-m font-serif">
            Telephone: 12345678910</h3>
            <h3 className="text-m font-serif">Email: help@Oaxaca.com</h3>
            <h3 className="text-m font-serif">Help Desk: Open Mon-Thurs 07:00 - 20:00</h3>
          </div>
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>
        
      </main>

      <Fade>
        {/* FAQ Section */}
        <hr />

        <div
        id = "FAQs"
        className="flex items-center justify-between"
  style={{ 
    display: "flex", 
    flexDirection: "column", 
    width: "100%",
  }}>
    <div className="py-6 flex justify-between items-end">
          <div className="flex items-end gap-10">
            <span 
            style={{paddingTop:"25px",paddingBottom:"25px",}}
            className="text-5xl font-serif">
              Frequently Asked Questions
            </span>
          </div>
        </div>

        <hr />

    <div style={{ textAlign: "center", width: "100%" }}>
    <hr />
    <details >
      <summary style={{ width: "100%", paddingTop:"25px", paddingBottom:"25px" }} className="text-3xl font-serif">How do I order food?</summary>
      <p tyle={{ textAlign: "center", paddingBottom:"5px" }} className="text-1xl font-serif">Once you are logged in, head over to the menu page from the navigation bar. Once you are done checkout from your basket.</p>
    </details>
    <hr />
    <details >
      <summary style={{ width: "100%", paddingTop:"25px", paddingBottom:"25px" }} className="text-3xl font-serif">Can I reserve a table?</summary>
      <p tyle={{ textAlign: "center", paddingBottom:"5px" }} className="text-1xl font-serif">Yes, the tables tab shows the available tables, all green tables can be reserved by talking to a Waiter.</p>
    </details>
    <hr />
    <details >
      <summary style={{ width: "100%", paddingTop:"25px", paddingBottom:"25px" }} className="text-3xl font-serif">Is all your food fresh?</summary>
      <p style={{ textAlign: "center", paddingBottom:"5px" }} className="text-1xl font-serif">Yes, all of our food is made with fresh ingredients.</p>
    </details>
    <hr />
    <details>
      <summary style={{ width: "100%", paddingTop:"25px", paddingBottom:"25px" }} className="text-3xl font-serif">What are the opening times?</summary>
      <p style={{ textAlign: "center", paddingBottom:"5px" }} className="text-1xl font-serif">Mon-Thurs: 07:00 - 21:00</p>
      <p style={{ textAlign: "center", paddingBottom:"5px"}} className="text-1xl font-serif">Fri-Sun: 08:30 - 23:30</p>
    </details>
    <hr />
    <details >
      <summary style={{ width: "100%", paddingTop:"25px", paddingBottom:"25px" }} className="text-3xl font-serif">How can I see the status of my order?</summary>
      <p style={{ textAlign: "center", paddingBottom:"5px"}} className="text-1xl font-serif">Click "My Orders" in the navigation bar to see all the details of your order.</p>
    </details>
    <hr />
    <details >
      <summary style={{ width: "100%", paddingTop:"25px", paddingBottom:"25px" }} className="text-3xl font-serif">Are there any new dishes?</summary>
      <p tyle={{ textAlign: "center", paddingBottom:"5px" }} className="text-1xl font-serif">Absolutely! Our menus are updated by the chefs as soon as there is a new item.</p>
    </details>
    <hr />
  </div>
  </div>
  </Fade>

      <br></br>
      <br></br>
      
    </div>
  );
}