/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/images/allimg/LOGO-color.png";
import { useState, useEffect } from "react";
import { IoMdCall, IoMdClose } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relativee text-[#7d7f8c] z-[99999]`}
    >
      {/* top Navbar */}
      {/* <header className="bg-SecondaryColor-0 overflow-hidden md:block">
        <div className="Container flex items-center justify-between">
          <div className="flex items-center gap-10">
            <p className="font-Poppins text-[15px] text-white md:flex items-center gap-1 relative before:absolute before:top-1/2 before:right-0 before:w-[1px] before:h-5 before:bg-BorderColor-0 before-:translate-1/2 hidden">
              <IoLocationOutline className="text-xl relative bottom-[2px]" />
              102/B New Market, Sandigo-USA
            </p>
            <Link
              to={"/"}
              className="font-Poppins text-[15px] text-white sm:flex items-center gap-2 hidden"
            >
              <BsEnvelope size={"18"} />
              example@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center">
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#1773ea] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#2ca5da] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#0073b1] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#e11a21] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
            <div className="lg:flex items-center gap-2 hidden">
              <h6 className="flex items-center gap-2 text-sm text-white font-Poppins font-light">
                <IoMdCall className="w-[14px] h-[14px] rounded-sm bg-white text-xs text-SecondaryColor-0" />
                Call :
              </h6>
              <Link
                to={"/"}
                className="font-Poppins font-medium text-sm text-white"
              >
                {" "}
                +980 234 4567
              </Link>
            </div>
          </div>
        </div>
      </header> */}
      {/* top Navbar */}
      <header
        className="header-section bg-white"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px]">
            {/* website Logo */}
            <div className="w-20 sm:w-24 md:w-32 lg:w-24">
  <Link to="/">
    <img
      src={Logo}
      className="block w-full h-auto"
      alt="website_logo"
    />
  </Link>
</div>


            {/* small screen size */}
            <div className="px-3 w-full lg:hidden flex justify-between bg-khaki h-[30px] items-center p-3">
              {/* <div className="w-28">
                <Link to="/">
                  <img
                    src={Logo}
                    className="block lg:hidden "
                    alt="constre_website_logo"
                  />
                </Link>
              </div> */}
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none  -mt-28"
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-[#02416A]" />
                ) : (
                  <FaBars className="w-5 h-5 text-[#02416A]" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <div className="flex gap-10 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } whitespace-nowrap lg:gap-7 text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0  flex flex-col lg:flex-row capitalize text-base lg:bg-transparent py-3 lg:py-0 font-Poppins font-medium text-white transition-all duration-500
                `}
              >
                {/* <NavLink
                  to="/"
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative`}
                >
                  <span className="flex items-center">
                    Home
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div
                    className="absolute pt-5 lg:pt-8 z-[1]"
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                  >
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HoverColor-0 ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/" className="py-2 block">
                            Home One
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home2" className="py-2 block">
                            Home Two
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home3" className="py-2 block">
                            Home Three
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink> */}
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-[#02416A] text-left hover:text-[#FD9F00] lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                  to="/"
                >
                  <span>Home</span>
                </NavLink>
               
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-[#02416A] text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                 <Link to='/service'> <span className="flex items-center">
                    Service
                    <BiChevronDown className="ml-1" />
                  </span>
                  </Link>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-[#02416A]">
                      <div className=" px-5 group hover:bg-[#FD9F00]">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/repair-maintenance" className="py-2 block">
                          Repair & Maintenance
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-[#FD9F00] ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service-contracts" className="py-2 block">
                          Service Contracts
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-[#FD9F00] ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/supplying-spare-parts" className="py-2 block">
                          Supplying Spare Parts
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-[#FD9F00] ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/consultancy" className="py-2 block">
                          Consultancy
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-[#FD9F00]">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/trainings" className="py-2 block">
                          Trainings
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-[#02416A] text-left hover:text-[#FD9F00] lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                  to="/about"
                >
                  <span >About Us</span>
                </NavLink>
                {/* <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Pages
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HeadingColor-0 ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/about" className="py-2 block">
                            About Us
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service" className="py-2 block">
                            Our Service
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service_details" className="py-2 block">
                            Service Details
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/team_inner" className="py-2 block">
                            Team Member
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/project" className="py-2 block">
                            Our Projects
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/project_details" className="py-2 block">
                            Project Details
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/pricing_inner" className="py-2 block">
                            Pricing Plan
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/testimonial" className="py-2 block">
                            Testimonial
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/appointment" className="py-2 block">
                            Appointment
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink> */}
                {/* blog sub menu link */}
                {/* <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-HeadingColor-0 text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Blog
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HoverColor-0 ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_grid" className="py-2 block">
                            Blog Grid
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_list" className="py-2 block">
                            Blog List
                          </Link>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_details" className="py-2 block">
                            Blog Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink> */}
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-[#02416A] text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300`}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </ul>
              <div className="hidden lg:flex items-center">
                <Link to={"/"}>
                  {/* <IoSearch className="text-xl ml-2 mr-7 text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0" /> */}
                </Link>
                {/* <Link to={"/appointment"} className="header-btn">
                  Get Free Quote
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
