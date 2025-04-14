"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";

const BookCall = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setIsModalOpen(true);
    setIsLoading(true);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className=" fixed sm:bottom-14 bottom-12   z-50  right-5 flex items-center gap-2 text-white bg-purple-800 sm:p-3 p-2 rounded-md cursor-pointer"
      >
        <FiCalendar size={18} />
        <span className=" sm:text-sm text-xs  font-medium">Book A Call</span>
      </button>
      <a
        href="https://wa.me/+8801732852745?text=Hello,%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        className=" fixed bottom-1.5 z-30  right-5 flex items-center gap-2 text-white bg-purple-800 sm:p-3 p-2 rounded-md cursor-pointer"
      >
        <FaWhatsapp size={18} />
        <span className="  sm:text-sm text-xs  font-medium">
          Chat on WhatsApp
        </span>
      </a>
      {isModalOpen && (
        <div className=" fixed z-50 w-screen h-screen top-14 bottom-0 left-0 right-0 bg-[#0F0F0F]">
          <button
            onClick={() => setIsModalOpen(false)}
            className=" text-white absolute right-8 top-5 hover:bg-white transition-all hover:text-purple-700 bg-gray-800 p-2 rounded-full"
          >
            <HiOutlineXMark size={30} />
          </button>
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-black">
              <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <iframe
            src="https://cal.com/b2b-leadbazz"
            className=" w-[90vw] mx-auto h-[90vh] mt-2 z-50"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default BookCall;
