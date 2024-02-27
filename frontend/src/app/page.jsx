"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

  const hotItems = [
    { name: "Pizza", rating: 4.5, image: "/pizza.jpeg"},
    { name: "Burger", rating: 4.6, image: "/pizza.jpeg"},
    { name: "Sandwich", rating: 4.1, image: "/pizza.jpeg"},
    { name: "Pasta", rating: 4.3, image: "/pizza.jpeg"},
    // Add more restaurants as needed
  ];
  
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
        <span className="text-5xl font-serif">Welcome To Oaxaca Restaurant</span>
        <span>All items served fresh with fresh ingredients</span>
      </div>
    </div>
        
    <hr />
    <br></br>

        <Slider {...settings}>
          <div>
          <h1 className="text-2xl font-serif underline mb-4">What's New?</h1>
           <img src="/pizza.jpeg" alt="What's New?" className="w-full rounded-t-3xl h-56 object-cover"/>
          </div>
          <div>
          <h1 className="text-2xl font-serif underline mb-4">Most Popular</h1>
            <img src="/pizza.jpeg" alt="Most Popular" className="w-full rounded-t-3xl h-56 object-cover"/>
          </div>
          <div>
          <h1 className="text-2xl font-serif underline mb-4">Best Deal</h1>
            <img src="/pizza.jpeg" alt="Best Deal" className="w-full rounded-t-3xl h-56 object-cover"/>
          </div>
          {/* Add more slides as needed */}
        </Slider>

        <br></br>
        <hr />
        <br></br>

        <h1 className="text-2xl font-serif mb-4"> Today's Offers <span className="font-bold no-underline">5% Off</span></h1>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {hotItems.map((restaurant, index) => (
        <div key={index} className="flex items-center justify-center text-center border-2 border-gray-300 p-4 rounded-lg" style={{width: '30%', height: 'auto'}}>
        <div style={{width: '100%', height: '110%'}}>
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full" style={{objectFit: 'contain'}} />
        </div>
        <div className="w-full ml-4">
        <h2 className="font-serif">{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        </div>
        </div>
        ))}
        </div>

        <br></br>
        <hr />
        <br></br>

        <h1 className="text-2xl font-serif mb-4"> Healthy Options To Explore </h1>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {hotItems.map((restaurant, index) => (
        <div key={index} className="flex items-center justify-center text-center border-2 border-gray-300 p-4 rounded-lg" style={{width: '30%', height: 'auto'}}>
        <div style={{width: '100%', height: '110%'}}>
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full" style={{objectFit: 'contain'}} />
        </div>
        <div className="w-full ml-4">
        <h2 className="font-serif">{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        </div>
        </div>
        ))}
        </div>

        <br></br>
        <hr />
        <br></br>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1em', marginTop: '2em'}}>
        <img src="/pizza.jpeg" alt="Mobile app" style={{width: '40%'}} />
        <div style={{width: '50%'}}>
        <h1 className="text-3xl font-serif">Download the Mobile App</h1>
        <p>Get 10% Off Your First Order</p>
        <button className="bg-green-800 text-white px-3 py-2 rounded-md">Find Out More</button>
        </div>
        </div>

        <br></br>
        <hr />
        <br></br>

        <h1 className="text-2xl font-serif mb-4"> Only At Oaxaca's </h1>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {hotItems.map((restaurant, index) => (
        <div key={index} className="flex items-center justify-center text-center border-2 border-gray-300 p-4 rounded-lg" style={{width: '30%', height: 'auto'}}>
        <div style={{width: '100%', height: '110%'}}>
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full" style={{objectFit: 'contain'}} />
        </div>
        <div className="w-full ml-4">
        <h2 className="font-serif">{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        </div>
        </div>
        ))}
        </div>

        <br></br>
        <hr />
        <br></br>

        <h1 className="text-2xl font-serif mb-4"> Popular Near You </h1>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {hotItems.map((restaurant, index) => (
        <div key={index} className="flex items-center justify-center text-center border-2 border-gray-300 p-4 rounded-lg" style={{width: '30%', height: 'auto'}}>
        <div style={{width: '100%', height: '110%'}}>
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full" style={{objectFit: 'contain'}} />
        </div>
        <div className="w-full ml-4">
        <h2 className="font-serif">{restaurant.name}</h2>
        <p>Rating: {restaurant.rating}</p>
        </div>
        </div>
        ))}
        </div>
      </main>

      <br></br>
      <hr />
      <br></br>
      
      <footer>
      <div className="footer" style={{ display: 'flex', justifyContent: 'left' }}>
      <div style={{ marginRight: '5em', textAlign: 'center' }}>
      <h1 className="text-l font-serif mb-1">Other Information</h1>
      <ul>
      <li className="text-xs"><Link href="/">About Us</Link></li>
      <li className="text-xs"><Link href="/">Careers</Link></li>
      <li className="text-xs"><Link href="/">More Oaxaca</Link></li>
      <li className="text-xs"><Link href="/">Help</Link></li>
      </ul>
      </div>
      <div style={{ marginRight: '5em', textAlign: 'center' }}>
      <h1 className="text-l font-serif mb-1">Follow Us!</h1>
      <ul>
      <li className="text-xs"><Link href="/">Instagram</Link></li>
      <li className="text-xs"><Link href="/">Twitter</Link></li>
      <li className="text-xs"><Link href="/">Facebook</Link></li>
      </ul>
      </div>
      <div style={{ marginRight: '20em', textAlign: 'center' }}>
      <h1 className="text-l font-serif mb-1">Download Our App!</h1>
      <ul>
      <li className="text-xs"><Link href="/">App Store</Link></li>
      <li className="text-xs"><Link href="/">Google Play Store</Link></li>
      </ul>
      </div>
      <div style={{ textAlign: 'center' }}>
      <span className="text-xl text-green-800">Oaxaca Restaurant</span>
      </div>
      </div>

      <br></br>
      <hr />

      <div className="text-xs" style={{ textAlign: 'right' }}>
        <Link href="/">Privacy Statement |</Link>
        <Link href="/"> Terms & Conditions |</Link>
        <Link href="/"> Cookie Policy </Link>
        {/* Add other links here */}
      </div>

      <p className="text-xs" style={{ textAlign: 'right' }}>© 2023 – 2024 Oaxaca’s. All Rights Reserved</p>
    </footer>

    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

