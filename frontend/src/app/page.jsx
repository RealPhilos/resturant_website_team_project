"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <span className="text-5xl font-serif text-gray-700 mt-24">
        Organic, Fresh foods.
      </span>
      <span className="text-lg text-gray-500">Since 1901.</span>
      <Link
        className="bg-green-700 text-white px-4 py-2 rounded-lg mt-16 mb-12"
        href="/menu"
      >
        Browse our menu
      </Link>
      <img className="h-2/3 w-5/6" src="pizza1.jpg" alt="" />
      <span className="text-2xl text-gray-600 mt-8 mb-32 px-32 text-center">
        Serving authentic original recipes with fresh meat and veg to people all
        over the UK for over 100 years
      </span>
    </div>
  );
}
