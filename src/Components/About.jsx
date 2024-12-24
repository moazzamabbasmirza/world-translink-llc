import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
            <div className="md:w-1/2 lg:w-5/12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center md:text-left">
                History
              </h1>
              <p className="mt-6 text-base leading-6 text-gray-600 text-center md:text-left">
                We have extensive experience across various sectors, including
                import and export, service provision, and working with
                government and private contractors, as well as general order
                suppliers. Previously, we have operated through esteemed
                companies in Pakistan such as:
              </p>
              <ul className="mt-6 list-disc space-y-4 text-gray-600">
                <li>
                  <strong>Z.I Enterprises</strong> (2007 - 09): Solution Providers – General Order Suppliers
                </li>
                <li>
                  <strong>Al-Ashtar International</strong> (2015 - 19): Solution Providers – Government/Private Contractor – General Order Supplier
                </li>
                <li>
                  <strong>Al-Muntaqim International Services</strong> (2019 - Present): Solution Providers – Government/Private Contractor – General Order Supplier
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 lg:w-5/12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center md:text-left">
                About Us
              </h1>
              <p className="mt-6 text-base leading-6 text-gray-600 text-center md:text-left">
                Since 2023, we have been expanding our operations from the
                sub-continent to establish a global business hub in the United
                Arab Emirates. Our successful freight forwarding and
                import-export services now include importing goods from Iran,
                Afghanistan, Pakistan, and China, which we resell to Dubai and
                GCC countries. We are committed to delivering high-quality
                products and services worldwide, enhancing our global presence
                and serving our clients with efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
