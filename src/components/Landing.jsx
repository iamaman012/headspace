import React from "react";
import "../styles/Landing.css";
import left_img from "../assets/Hero_Image_left.png";
import right_img from "../assets/Hero_Right_Image_Default-2022.webp";
import "../styles/wave.css";

const Landing = () => {
  return (
    <>
      <div className="main-component relative flex justify-between pt-20 min-h-screen max-lg:flex-col max-lg:justify-center max-lg:items-center ">
        <div className="left-image flex max-lg:order-2">
          <img
            className="max-md:h-4 max-md:w-4"
            src={left_img}
            alt="left-image"
          />
        </div>
        <div className="main-content flex-col text-center max-lg:order-1">
          <h2 className="text-6xl font-semibold">Make it your year</h2>
          <h2 className="text-6xl font-semibold">with Headspace</h2>
          <div className="flex bg-yellow-400 rounded-xl px-28 py-4 mt-10 text-center">
            <div className="flex-col">
              <h1 className="text-2xl">Free for 14 days, then 1499/year</h1>
              <p className=" ">124.92 per month,billed annually</p>
            </div>
          </div>
          <div className="text-xs font-light text-gray-500 mt-5">
            <p>
              After your free trial, the annual subscription is ₹1499 INR and
              automatically renews each year.
            </p>
            <p>
              Are you a post-secondary or university student? Save 85%, with
              valid SheerID student verification, for our
            </p>
            <p>Student plan</p>
          </div>

          <button className="bg-blue-700 text-white text-lg rounded-full py-3 px-7 mt-9">
            Try for free
          </button>
        </div>
        <div className="right-image flex max-lg:order-3">
          <img src={right_img} alt="left-image" />
        </div>
        <div className="custom-shape-divider-bottom-1728039665 flex">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Landing;
