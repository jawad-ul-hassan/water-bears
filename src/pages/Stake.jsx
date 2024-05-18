import React from "react";
import Card from "../components/Card";
import { FaChevronDown } from "react-icons/fa";
import Carousel from "../components/Carousel";
import heroLeftImg from "../assets/images/hero-left-decorator-removebg-preview.png";
import heroRightImg from "../assets/images/hero-right-decorator-removebg-preview.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Stake = () => {
  return (
    <>
      <Header />
      {/* Hero Section  */}
      <div className="container h-full flex flex-row relative">
        <img
          className="w-[50px] md:w-[234px] md:h-[390px] absolute left-0 top-20 md:top-20"
          src={heroLeftImg}
          alt=""
        />
        <div className="w-full md:w-[858px] gap-[40px] mx-auto mt-[157px] font-[400] flex flex-col">
          <div className="w-full md:w-[696px] gap-[11px] mx-auto px-auto font-[400]">
            <h1 className="text-[60px] w-full md:w-[529px] mx-auto text-center md:text-left">
              Stake Your Water Bears
            </h1>
            <p className="text-[22px] opacity-70 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="w-full md:w-[858px] gap-[93px] flex flex-col">
            <div className="w-full bg-[#42bfe8] gap-[80px] rounded-lg p-[32px] flex flex-col md:flex-row items-center">
              <div className="w-[202px] gap-[16px] text-center">
                <h1 className="text-[18px] font-[400]">
                  Global Of Water Bears Staked
                </h1>
                <p className="text-[28px]">85%</p>
              </div>

              <div className="w-[202px] gap-[16px] text-center">
                <h1 className="text-[18px] font-[400]">
                  Total Water Bears Staked:
                </h1>
                <div className="flex flex-row justify-center">
                  <p className="text-[28px]">8/10</p>
                  <p className="text-[28px]">(80%)</p>
                </div>
              </div>

              <div className="w-[161px] gap-[16px] text-center flex flex-col">
                <div className="flex flex-row items-center justify-center">
                  <h1 className="text-[16px] font-[400] pt-2 mr-1">
                    My Rewards
                  </h1>
                  <h1 className="text-[32px] font-[400]">DNA 500</h1>
                </div>

                <button className="w-full h-[44px] bg-white text-[#42bfe8] text-[20px] flex justify-center items-center rounded-lg">
                  Claim Reward
                </button>
              </div>
            </div>

            <div className="w-full md:w-[858px] gap-[40px] flex flex-col">
              <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="w-[305px] gap-[29px] flex flex-row md:mx-0 mx-auto mb-10 md:mb-0">
                  <button className="w-[137px] h-[44px] rounded-lg flex items-center justify-center bg-[#42BFE8] text-[20px]">
                    Stake All
                  </button>
                  <button className="w-[137px] h-[44px] rounded-lg flex items-center justify-center bg-[#2B2B2B] text-[20px] text-white text-opacity-70 border-[1px] border-white">
                    Unstake All
                  </button>
                </div>
                <div className="flex flex-col md:flex-row my-5 md:my-0 mx-auto md:mx-0">
                  <button className="w-[119px] h-[44px] rounded-lg flex items-center justify-center bg-[#2B2B2B] text-[20px] text-white text-opacity-70 border-[1px] border-white gap-[10px]">
                    <h1>Sort By</h1>
                    <FaChevronDown className="size-[20px]" />
                  </button>
                </div>
              </div>

              {/* Cards  */}
              <Card />
              {/* Cards  */}
            </div>
          </div>
        </div>
        <img
          className="w-[50px] md:w-[234px] md:h-[390px] absolute right-0 top-20 md:top-20"
          src={heroRightImg}
          alt=""
        />
      </div>
      {/* Hero Section  */}

      {/* Carousel  */}
      {/* <Carousel /> */}
      {/* Carousel  */}

      <Footer />
    </>
  );
};

export default Stake;
