"use client";

import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from "./../providers/auth";
import { useState, useEffect, useContext } from 'react';
import OrderButton from "../components/order-now-button";

export default function Home() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const userType = user ? user.role : null;
  const username = user ? user.username : null;

  return (
    <div>
      <Head>
        <title>Oaxaca Restaurant</title>
        <meta name="description" content="This is the Oaxaca Restaurant Menu" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="py-6 flex justify-between items-end">
          <div className="flex items-end gap-10">
            <span className="text-5xl font-serif">
              Welcome To Oaxaca Restaurant
            </span>
            <span>All items served fresh with fresh ingredients</span>
          </div>
        </div>

        <hr />
        <br></br>

        <Slider {...settings}>
        <Fade>
          <div>
          <video
          src="/entranceVid.mp4" 
          autoPlay
          loop
          muted alt="Oaxaca" 
          style={{ 
          width: "80%",
          height: "300px",
          borderRadius: "1.5rem", 
          margin: "auto" }} 
          className="w-full rounded-t-3xl object-cover"/>
          </div>
          </Fade>
          <Fade>
          <div>
          <video
          src="/steakVid.mp4" 
          autoPlay
          loop
          muted alt="Oaxaca" 
          style={{ 
          width: "80%",
          height: "300px",
          borderRadius: "1.5rem", 
          margin: "auto" }} 
          className="w-full rounded-t-3xl object-cover"/>
          </div>
          </Fade>
          <Fade>
          <div>
          <video
          src="/interiorVid.mp4" 
          autoPlay
          loop
          muted alt="Oaxaca" 
          style={{ 
          width: "80%",
          height: "300px",
          borderRadius: "1.5rem", 
          margin: "auto",
          objectFit: "cover", // This makes the video maintain its aspect ratio while filling the container.
          objectPosition: "50% 100%" // This aligns the video to the bottom of the container.  
        }} 
          className="w-full rounded-t-3xl object-cover"/>
          </div>
          </Fade>
          {/* Add more slides as needed */}
        </Slider>

        <br></br>
        <hr />
        <br></br>
        <Fade>
  <h1 className="text-2xl font-serif mb-4" style={{ textAlign: "center" }}>
    {" "}
    Quick Navigation{" "}
  </h1>
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

    <ScrollLink to="mostPopular" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>Most Popular</button>
    </ScrollLink>

    <ScrollLink to="healthyOptions" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000",
        }}>Healthy Options</button>
    </ScrollLink>

    <ScrollLink to="onlyAtOaxacas" smooth={true} duration={500}>
      <button 
      style={{ 
        margin: "10px",
        backgroundColor: "#FAFAF5",
        padding: "1em",
        borderRadius: "1.5rem", 
        border: "1px solid #000000", 
        }}>Only At Oaxaca's</button>
    </ScrollLink>
  </div>
</Fade>

        <br></br>
        <hr />
        <br></br>
        
        <div style={{ 
        borderRadius: "1.5rem", 
        border: "2px solid #000000",  }}>
        <br></br>

        <Fade>
        <div
        id = "mostPopular"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1em",
            marginTop: "2em",
          }}
        >
          <video
          src="/steakVid.mp4" 
          autoPlay
          loop
          muted alt="Steak" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">World Famous Lamb Steak!</h1>
            <p>Most Popular</p>
            <br></br>
            <OrderButton userType={userType} isLoggedIn={isLoggedIn} />
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
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Award Winning Wings!</h1>
            <p>Most Popular</p>
            <br></br>
            <OrderButton userType={userType} isLoggedIn={isLoggedIn} />
          </div>
          <video
          src="/wingsVid.mp4" 
          autoPlay
          loop
          muted alt="Wings" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        id="healthyOptions"
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
          <video
          src="/tacosVid.mp4" 
          autoPlay
          loop
          muted alt="Tacos" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Try Our Tacos!</h1>
            <p>Great Healthy Option</p>
            <br></br>
            <OrderButton userType={userType} isLoggedIn={isLoggedIn} />
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
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Try Our Salad!</h1>
            <p>Great Healthy Option</p>
            <br></br>
            <OrderButton userType={userType} isLoggedIn={isLoggedIn} />
          </div>
          <video
          src="/saladVid.mp4" 
          autoPlay
          loop
          muted alt="Salad" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>

        <br></br>

        <div 
        id="onlyAtOaxacas"
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
          <video
          src="/pizzaVid.mp4" 
          autoPlay
          loop
          muted alt="Pizza" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Try Our Pizza!</h1>
            <p>Only At Oaxaca's</p>
            <br></br>
            <OrderButton userType={userType} isLoggedIn={isLoggedIn} />
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
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Try Our Burger!</h1>
            <p>Only At Oaxaca's</p>
            <br></br>
            <OrderButton userType={userType} isLoggedIn={isLoggedIn} />
          </div>
          <video
          src="/burgerVid.mp4" 
          autoPlay
          loop
          muted alt="Burger" 
          style={{ width: "40%",
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
          <video
          src="/appVid.mp4" 
          autoPlay
          loop
          muted alt="Download The App" 
          style={{ width: "40%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
          <div style={{ 
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Download the Mobile App!</h1>
            <p>Coming Very Soon</p>
            <br></br>
            <button className="bg-green-800 text-white px-3 py-2 rounded-md">
            <Link href="/info">
              Find Out More!
            </Link>
            </button>
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
            width: "50%", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
            <h1 className="text-3xl font-serif">Join Our Team!</h1>
            <p>Careers</p>
            <br></br>
            <button className="bg-green-800 text-white px-3 py-2 rounded-md">
            <Link href="/info">
              Find Out More!
            </Link>
            </button>
          </div>
          <video
          src="/chefVid.mp4" 
          autoPlay
          loop
          muted alt="Chef" 
          style={{ width: "30%",
          borderRadius: "1.5rem", 
          margin: "auto" }} />
        </div>
        </Fade>

        <br></br>
        </div>
        
      </main>

      <br></br>
      <hr />
      <br></br>

    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",  
        background: "rgba(0, 128, 0, 0.5)", 
        width: "50px", 
        height: "50px" }}
      onClick={onClick}
    >
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "rgba(0, 128, 0, 0.5)", 
        width: "50px", 
        height: "50px" }}
      onClick={onClick}
    />
  );
}