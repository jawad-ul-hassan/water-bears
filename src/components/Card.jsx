import React from "react";
import normalBear from "../assets/images/hero-bear-sm.png";
import stylishBear from "../assets/images/hero-bear-md.png";

const Card = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-[20px]">
        <div className="flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
          <img
            className="w-full rounded-tr-lg rounded-tl-lg"
            src={stylishBear}
            alt=""
          />
          <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
            <div className="w-full gap-[12px]">
              <h1 className="text-[22px] w-[141px]">Water Bears #082</h1>
              <div className="w-full gap-[8px]">
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Staked On</p>
                  <p className="text-[16px]">----</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Unlocks On</p>
                  <p className="text-[16px]">----</p>
                </div>
              </div>
            </div>
            <button className="w-full h-[34px] rounded-lg flex justify-center items-center bg-[#42bfe8]">
              Stake
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
          <img
            className="w-full rounded-tr-lg rounded-tl-lg"
            src={normalBear}
            alt=""
          />
          <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
            <div className="w-full gap-[12px]">
              <h1 className="text-[22px] w-[141px]">Water Bears #174</h1>
              <div className="w-full gap-[8px]">
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Staked On</p>
                  <p className="text-[16px]">----</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Unlocks On</p>
                  <p className="text-[16px]">----</p>
                </div>
              </div>
            </div>
            <button className="w-full h-[34px] rounded-lg flex justify-center items-center bg-[#42bfe8]">
              Stake
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
          <img
            className="w-full rounded-tr-lg rounded-tl-lg"
            src={stylishBear}
            alt=""
          />
          <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
            <div className="w-full gap-[12px]">
              <h1 className="text-[22px] w-[141px]">Water Bears #199</h1>
              <div className="w-full gap-[8px]">
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Staked On</p>
                  <p className="text-[16px]">Mar 4, 23:03</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Unlocks On</p>
                  <p className="text-[16px]">Mar 18, 22:03</p>
                </div>
              </div>
            </div>
            <button className="w-full h-[34px] rounded-lg flex justify-center items-center bg-[#42bfe8]">
              Stake
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-[8px] w-[200px] mx-auto md:mx-0 bg-[#2B2B2B] pb-3 rounded-lg">
          <img
            className="w-full rounded-tr-lg rounded-tl-lg"
            src={normalBear}
            alt=""
          />
          <div className="flex flex-col w-[176px] gap-[20px] mx-auto">
            <div className="w-full gap-[12px]">
              <h1 className="text-[22px] w-[141px]">Water Bears #248</h1>
              <div className="w-full gap-[8px]">
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Staked On</p>
                  <p className="text-[16px]">Mar 4, 23:03</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Unlocks On</p>
                  <p className="text-[16px]">Mar 18, 22:03</p>
                </div>
              </div>
            </div>
            <button className="w-full h-[34px] rounded-lg flex justify-center items-center bg-[#42bfe8]">
              Stake
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
