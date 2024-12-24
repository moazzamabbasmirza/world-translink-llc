import React from "react";
import seaport from "../Assets/seaport-dock-hazards.jpg";
import importexport from "../Assets/import-export.jpg";

const Cards = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={seaport} alt="Seaport Dock" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">One-Window Solutions</div>
          <ul className="list-disc pl-5">
            <li className="font-medium">Logistics Services</li>
            <li className="font-medium">Custom Clearance</li>
            <li className="font-medium">Local Transportation</li>
          </ul>
          <p className="text-gray-700 text-base mt-4">
            Our one-window solution simplifies your logistics with all services
            under one roof. From logistics management to local transportation and customs clearance, we ensure your goods move smoothly and on time. By handling every aspect of your supply chain, we save you time, reduce costs, and let you focus on growing your business.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #logistics
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #shipping
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #efficiency
          </span>
        </div>
      </div>
      
      {/* Middle Card */}
      <div className="rounded overflow-hidden shadow-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition duration-300 ease-in-out">
        <div className="px-6 py-16">
          <p className="text-gray-700 text-2xl md:text-3xl font-semibold text-center animate-fadeIn">
            A Bridge between Oceans and Borders
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={importexport} alt="Import Export" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Imports & Exports</div>
          <p className="text-gray-700 text-base mt-4">
            We specialize in procuring fresh vegetables and fruits, finished and unfinished fabrics, artificial imitation jewelry, garment accessories including yarn, and chemical products from China, Pakistan, UAE, Iran, and Afghanistan. We then export these high-quality goods to various parts of the world based on demand, ensuring timely delivery and customer satisfaction.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #logistics
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #port
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #global_trade
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
