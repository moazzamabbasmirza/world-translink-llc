import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-center bg-no-repeat bg-[url('https://www.cafworldwide.com/hubfs/Blog/CAF-Blog-The-Importance-of-International-Freight-Forwarders.jpg')] bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-black-300 lg:text-xl sm:px-16 lg:px-48">
            Here at World Translink we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
