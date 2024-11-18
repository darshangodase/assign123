import React from "react";
import Logo from "./assets/Hirers.co.in - Copy.png";
import EmployerImage from "./assets/employer.png";
import JobSeekerImage from "./assets/jobseeker.png";
import LeftArrow from "./assets/arrow1.png";
import RightArrow from "./assets/arrow2.png";
import InstagramImage from "./assets/instagram.png";
import FacebookImage from "./assets/facebooklog.png";
import LinkedInImage from "./assets/linkedinlog.png";
import WhatsAppImage from "./assets/whatsapplog.png";

function App() {
  return (
    <div className="min-h-screen relative">
      <header className="h-16 flex justify-between items-center bg-[#393285] text-white py-4 px-8">
        <img src={Logo} alt="Logo" className="w-14 h-13" />
        <nav className="hidden md:flex gap-20 text-xl">
          <a href="#create" className="text-white font-medium ">
            Post Job
          </a>
          <a href="#apply" className="text-white font-medium">
            Need Job
          </a>
          <a href="#contact" className="text-white font-medium">
            Contact Us
          </a>
        </nav>
        <button className="md:mr-10 bg-white text-[#393285] px-4 py-2 md:text-lg rounded-lg font-semibold">
          SignUp/LogIn
        </button>
      </header>

      <div className="h-[calc(100vh-4rem)] overflow-hidden relative bg-cover bg-center bg-no-repeat  bg-[url('./assets/mobile_bg.png')] md:bg-[url('./assets/default-background.png')]">
        <section className="max-w-56 flex flex-col justify-center text-center py-4 md:py-12 bg-opacity-80 mx-auto sm:max-w-[1000px] rounded-lg md:mt-5">
          <h1 className="text-lg md:text-5xl font-bold text-[#393285] ">
            Find, Apply, and Secure
          </h1>
          <h2 className="text-lg md:text-5xl font-bold text-[#393285] md:mt-3 ">
            Your Dream Job with Hirers in Just 2 Days!
          </h2>
          <div className="md:hidden gap-3 flex justify-center items-center mt-1">
            <img
              src={WhatsAppImage}
              alt="WhatsApp Logo"
              className="w-7 h-7 rounded-xl ml-[6px]"
            />
            <img
              src={InstagramImage}
              alt="Instagram Logo"
              className="w-7 h-7 rounded-xl ml-[1px]"
            />
            <img
              src={FacebookImage}
              alt="Facebook Logo"
              className="w-7 h-7 rounded-xl ml-[0px]"
            />
            <img
              src={LinkedInImage}
              alt="LinkedIn Logo"
              className="w-7 h-7 rounded-xl mr-[18px]"
            />
          </div>

          <h2 className="hidden md:block md:text-2xl font-normal text-black ">
            Experience the accelerated journey to your dream career with us.
          </h2>
        </section>

        <section className="flex flex-wrap-reverse justify-center mt-6 gap-8 sm:gap-24">
          {/* For Employers Box */}
          <div className="relative flex flex-col gap-4 items-center overflow-visible">
            <div className="relative w-48 h-44 md:w-64 md:h-60  bg-[#393299] bg-opacity-15 rounded-lg py-2 px-3">
              <img
                src={EmployerImage}
                alt="For Employers"
                className=" absolute  h-40 -left-14 md:w-80 md:h-72 md:bottom-1 md:-left-24"
              />
              <img
                src={LeftArrow}
                alt="For Employers"
                className=" absolute h-24 md:w-32 md:h-28 bottom-1 -right-0"
              />

              <h3 className=" text-sm md:text-2xl font-bold text-[#393285] ml-16 ">
                For Employers
              </h3>
              <p className="text-xs text-[#443B3B] mb-2 text-left ml-16 font-semibold md:text-lg mt-2">
                Hire from a large pool of filtered candidates!
              </p>
            </div>

            <button className="bg-[#393285] text-white px-4 py-2 rounded-2xl md:rounded-xl w-32 md:text-xl">
              Post Job
            </button>
          </div>
          <div className="flex flex-col  gap-4 items-center ">
            <div className="relative w-48 h-44 md:w-64 md:h-60  bg-[#393299] bg-opacity-15 rounded-lg py-2 px-3">
              <img
                src={JobSeekerImage}
                alt="For Employers"
                className=" absolute h-40 -right-11 md:w-80 md:h-72 md:bottom-0 md:-right-24"
              />
              <img
                src={RightArrow}
                alt="For Employers"
                className=" absolute h-24 md:w-32 md:h-28 -bottom-0 left-0"
              />

              <h3 className=" text-sm md:text-2xl font-bold text-[#393285] mb-2 mr-14 ">
                For JobSeekers
              </h3>
              <p className="text-xs text-[#443B3B] mb-2 text-left mr-16 font-semibold md:text-lg">
                Get 100% verified jobs at no cost!
              </p>
            </div>

            <button className="bg-[#393285] md:text-xl text-white px-4 py-2 rounded-2xl md:rounded-xl w-32">
              Search Job
            </button>
          </div>
        </section>
        <div className="hidden absolute top-1/2 right-8 transform -translate-y-1/2 md:flex flex-col gap-4">
          <div className="w-10 h-10">
            <a href="#">
              <img
                src={WhatsAppImage}
                alt="WhatsApp"
                className="w-full h-full rounded-lg object-cover"
              />
            </a>
          </div>
          <div className="w-10 h-10">
            <a href="#">
              <img
                src={FacebookImage}
                alt="Facebook"
                className="w-full h-full rounded-lg object-cover"
              />
            </a>
          </div>
          <div className="w-10 h-10">
            <a href="#">
              <img
                src={InstagramImage}
                alt="Instagram"
                className="w-full h-full rounded-lg object-cover"
              />
            </a>
          </div>
          <div className="w-10 h-10">
            <a href="#">
              <img
                src={LinkedInImage}
                alt="LinkedIn"
                className="w-full h-full rounded-lg object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
