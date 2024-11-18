import React from "react";
import Logo from "./assets/Hirers.co.in - Copy.png";
import MdBackground from "./assets/default-background.png"; // Background for medium and up screens
import DefaultBackground from "./assets/mobile_bg.png"; // Background for small screens

function App() {
  return (
    <div className="h-screen relative">
      <header className="h-16 flex justify-between items-center bg-[#393285] text-white py-4 px-8">
        <img src={Logo} alt="Logo" className="w-14 h-13" />
        <nav className="hidden md:flex gap-20 text-xl">
          <a href="#" className="text-white font-medium">
            Post Job
          </a>
          <a href="#" className="text-white font-medium">
            Need Job
          </a>
          <a href="#" className="text-white font-medium">
            Contact Us
          </a>
        </nav>
        <button className="md:mr-10 bg-white text-[#393285] px-4 py-2 md:text-lg rounded-lg font-semibold">
          SignUp/LogIn
        </button>
      </header>

      {/* Hero Section with Background Image using Tailwind's md: class */}
      <div
        className="h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center bg-[url('./assets/mobile_bg.png')] sm:bg-[url('./assets/default-background.png')]"
      >
        {/* Add any content you want to overlay on the background */}
        <div className="w-full h-full flex items-center justify-center text-3xl">
          Welcome to Hirers.co.in
        </div>
      </div>
    </div>
  );
}

export default App;
