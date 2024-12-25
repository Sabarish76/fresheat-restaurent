"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Customer from "@/app/components/images/customer.png";
import Listing from "@/app/components/images/listing.png";
import Men from "@/app/components/images/men.png";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero-wrapper ">
      <div
        className="bg-design"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      ></div>

      <div className="mb-wrapper ">
        <p
          className="mb-title"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1100"
        >
          REAL ESTATE
        </p>
        <p
          className="mb-head"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          Welcome To Judge And Associates
        </p>
        <p
          className="mb-sub-head"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          The House of Real Estate
        </p>
        <p
          className="mb-para"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1400"
        >
          Where your real estate dreams become reality. Whether you’re buying
          your first home, seeking an investment opportunity, or selling your
          property for the best value, our expert team is here to guide you
          every step of the way.
        </p>
        <div
          className="mb-card"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {" "}
          <span className="z-20">
            {" "}
            <Image src={Customer} alt="nigo" width={250} />
          </span>
        </div>
        <div
          className="mb-card"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1600"
        >
          {" "}
          <span className="z-20">
            {" "}
            <Image src={Listing} alt="nigo" width={200} />
          </span>
        </div>
        <div className="border-cls">
          {" "}
          <div className="scroll-container">
            <div className="scroll-content">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl-wrapper">
        <p
          className="title"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          REAL ESTATE
        </p>
        <p
          className="head"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1100"
        >
          Welcome To Judge And Associates
        </p>
        <p
          className="sub-head"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          The House of Real Estate
        </p>
        <p
          className="para"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          Where your real estate dreams become reality. Whether you’re buying
          your first home, seeking an investment opportunity, or selling your
          property for the best value, our expert team is here to guide you
          every step of the way.
        </p>
        <div
          className="card"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1400"
        >
          {" "}
          <span className="z-20">
            {" "}
            <Image src={Customer} alt="nigo" width={250} />
          </span>
        </div>
        <div
          className="card"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {" "}
          <span className="z-20">
            {" "}
            <Image src={Listing} alt="nigo" width={200} />
          </span>
        </div>
        <div className="z-20">
          {" "}
          <Image
            src={Men}
            alt="nigo"
            className="men-img"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1600"
          />
          <div className="border-cls">
            <div className="scroll-container">
              <div className="scroll-content">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
