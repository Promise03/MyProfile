import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./Navbar"
import Footer from "./footer";

const OutletPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 z-50 w-12 h-12 flex justify-center items-center right-5 bg-slate-600 text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-slate-600 transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default OutletPage;