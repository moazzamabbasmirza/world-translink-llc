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
          Reliable Sourcing, Serving Humanity      </h1>
          <p className="mb-8 text-lg font-normal text-black-300 lg:text-xl sm:px-16 lg:px-48">
          Global Imports is a wholesale business that specializes in importing fresh fruit products, fabrics, imitation jewelry, and hardware tools from India Afghanistan and China. We aim to provide high-quality products to our customers at competitive prices. Our business model involves working directly with manufacturers and suppliers in India Afghanistan Pakistan and China to ensure that we can offer our customers the best possible products and prices.</p>
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
