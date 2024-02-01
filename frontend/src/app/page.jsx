"use client";

import Head from "next/head";
import Link from "next/link";

export default function Order() {
  return (
    <div>
      <Head>
        <title>Oaxaca Restaurant</title>
        <meta name="description" content="This is the Oaxaca Restaurant Menu" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/styles/tailwind.css" rel="stylesheet" />
      </Head>

      <main>
        <div>
          <nav className="flex justify-center flex-wrap">
            <Link href="/">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Home
              </button>
            </Link>
            <Link href="/menu">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Menu
              </button>
            </Link>
            <Link href="/order">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Order
              </button>
            </Link>
            <Link href="/track">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Track
              </button>
            </Link>
            <Link href="/bill">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Billing
              </button>
            </Link>
            <Link href="/feedback">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Feedback
              </button>
            </Link>
            <Link href="/customer/login">
              <button className="px-5 py-2 text-lg font-bold text-black bg-blue-300 m-1 transition-colors duration-300 hover:bg-white">
                Login
              </button>
            </Link>
          </nav>
        </div>
        <h1>Welcome To Oaxaca Restaurant!</h1>
        The welcome page for the restaurant.
        <br></br>
      </main>

      <footer>Video of Restaurant, Reviews</footer>
    </div>
  );
}
