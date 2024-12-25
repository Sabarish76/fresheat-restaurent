"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import clsx from "clsx";
import { FaPhoneVolume } from "react-icons/fa6";
import Logo from "@/app/components/images/Logo.png";
import Icon from "@/app/components/images/house.png";

const Navbar = () => {
  const [isopen, Setisopen]: any = useState(false);

  return (
    <>
      {" "}
      <nav className="flex justify-between px-8 items-center py-4 lg:px-20 w-[100%] mx-auto  sticky top-0 !z-[10000] bg-white">
        <section className="">
          <div className="flex items-center gap-5  md:gap-20">
            <div
              className="text-3xl cursor-pointer md:hidden"
              onClick={() => Setisopen(true)}
            >
              <IoMenu />
            </div>

            <div className="flex">
              <div className="hidden md:flex md:gap-10">
                <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105">
                  {" "}
                  <a href="#home">Home</a>
                </p>
                <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105">
                  {" "}
                  <a href="#about">About</a>
                </p>
                <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105">
                  {" "}
                  <a href="#listings">Listings</a>
                </p>
                <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105">
                  {" "}
                  <a href="#services">Services</a>
                </p>
                <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105">
                  {" "}
                  <a href="#blogs">Blogs</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[100%] md:w-[20%] text-center">
          {" "}
          <Link href={"/"} className="text-center">
            <Image src={Logo} alt="nigo" width={150} />
          </Link>
        </section>
        <section className="w-[90%] md:w-[20%] text-end flex justify-end ">
          {" "}
          {/* <button className="p-2 px-3 bg-primary text-white flex items-center gap-2 rounded-lg hover:bg-bg-btn transition duration-300 ease-in-out transform hover:scale-105">
            <span>
              {" "}
              <Image src={Icon} alt="nigo" width={15} />
            </span>
            Add Listing
          </button> */}
        </section>
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isopen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute top-0 left-0 h-screen p-8 gap-8 z-[100] flex">
            <div
              className="mt-0 mb-8 text-3xl cursor-pointer"
              onClick={() => Setisopen(false)}
            >
              <IoClose />
            </div>
            <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105 text-center">
              {" "}
              Home
            </p>
            <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105 text-center">
              {" "}
              About
            </p>
            <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105 text-center">
              Listings
            </p>
            <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105 text-center">
              Services
            </p>
            <p className="hover:bg-bg-btn hover:p-1 hover:rounded-md cursor-pointer   transition duration-300 ease-in-out transform hover:scale-105 text-center">
              Blogs
            </p>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
