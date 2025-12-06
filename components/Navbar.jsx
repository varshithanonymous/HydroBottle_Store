"use client";

import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          WaterBottleStore
        </a>
        <button
          className="mobile-only text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } mobile-only absolute bg-blue-500 top-16 left-0 w-full p-4`}
        >
          <li className="mb-4">
            <a href="#features">Features</a>
          </li>
          <li className="mb-4">
            <a href="#about">About</a>
          </li>
          <li className="mb-4">
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="desktop-only flex gap-6">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;