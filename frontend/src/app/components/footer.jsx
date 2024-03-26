// Footer.jsx

import React from 'react';
import Link from "next/link";


const Footer = () => {
  return (
    <footer>
    <div
      className="footer"
      style={{ display: "flex", justifyContent: "left" }}
    >
      <div style={{ marginRight: "5em", textAlign: "center" }}>
        <h1 className="text-l font-serif mb-1">Other Information</h1>
        <ul>
          <li className="text-xs">
            <Link href="/">About Us</Link>
          </li>
          <li className="text-xs">
            <Link href="/">Careers</Link>
          </li>
          <li className="text-xs">
            <Link href="/">More Oaxaca</Link>
          </li>
          <li className="text-xs">
            <Link href="/">Help</Link>
          </li>
        </ul>
      </div>
      <div style={{ marginRight: "5em", textAlign: "center" }}>
        <h1 className="text-l font-serif mb-1">Follow Us!</h1>
        <ul>
          <li className="text-xs">
            <Link href="/">Instagram</Link>
          </li>
          <li className="text-xs">
            <Link href="/">Twitter</Link>
          </li>
          <li className="text-xs">
            <Link href="/">Facebook</Link>
          </li>
        </ul>
      </div>
      <div style={{ marginRight: "20em", textAlign: "center" }}>
        <h1 className="text-l font-serif mb-1">Download Our App!</h1>
        <ul>
          <li className="text-xs">
            <Link href="/">App Store</Link>
          </li>
          <li className="text-xs">
            <Link href="/">Google Play Store</Link>
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "center" }}>
        <span className="text-xl text-green-800">Oaxaca Restaurant</span>
      </div>
    </div>

    <br></br>
    <hr />

    <div className="text-xs" style={{ textAlign: "right" }}>
      <Link href="/">Privacy Statement |</Link>
      <Link href="/"> Terms & Conditions |</Link>
      <Link href="/"> Cookie Policy </Link>
      {/* Add other links here */}
    </div>

    <p className="text-xs" style={{ textAlign: "right" }}>
      © 2023 – 2024 Oaxaca’s. All Rights Reserved
    </p>
  </footer>
  );
};

export default Footer;
