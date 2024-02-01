"use client";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oaxaca Restaurant</title>
        <meta name="description" content="Welcome to Oaxaca Restaurant" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div>
          <nav>
            <style jsx>{`
              button {
                padding: 10px 20px;
                font-size: 20px;
                font-family: "Montserrat", sans-serif;
                font-weight: 1000;
                color: black;
                background-color: #add8e6;
              }
            `}</style>
            <Link href="/">
              <button>Home</button>
            </Link>
            <Link href="/menu">
              <button>Menu</button>
            </Link>
            <Link href="/order">
              <button>Order</button>
            </Link>
            <Link href="/track">
              <button>Track</button>
            </Link>
            <Link href="/billing">
              <button>Billing</button>
            </Link>
            <Link href="/feedback">
              <button>Feedback</button>
            </Link>
            <Link href="/login">
              <button>Login</button>
            </Link>
          </nav>
        </div>
        <h1>Welcome to Oaxaca Restaurant</h1>
        The welcome page for the restaurant. <br></br>
      </main>

      <footer>Small Introduction</footer>
    </div>
  );
}
