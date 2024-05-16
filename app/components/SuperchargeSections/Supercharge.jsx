"use client";
import React, { useEffect } from "react";
import "./Supercharge.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Supercharge = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-center font-semibold text-[30px] my-5 text-black">
        Features of Smart Profit-X
      </h2>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1"
            className="df-item p-6 py-8 px-8 md:flex  justify-around background_box"
          >
            <div className="md:w-1/2">
              <img
                src="/top_image.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-5 text-black">Smart Profit-X Plan</h3>
              <p className=" max-w-[350px] text-black mt-3">
                Smart Profit-X Plan will allow users to stake any amount in USDT
                above 100$. Income will be sent to an user wallet address upon
                withdrawal.
              </p>
            </div>
            <div className="max-w-[400px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBoxsss.svg" className="featuresBoxsss" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item p-6 py-8 px-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 ">
              <img
                src="/topimage2.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl  text-black  mt-5">
                Smart Profit-X Referral plan
              </h3>

              <p className="max-w-[350px] mt-3 text-black">
                User will get direct referral income of 5% directly into their
                reward amount. This will be one time income. Users can make as
                many referrals as they want.
              </p>
            </div>
            <div className="max-w-[450px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="Other12548.svg" className="featuresBoxsss" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item  p-6 py-8 px-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 ">
              <img
                src="/topimage3.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-4  text-black">
                Smart Profit-X level Plan
              </h3>
              <p className="text-black mt-3 max-w-[350px]">
                Upon each successfull direct, one level is unlocked. Users can
                unlock 15 levels by inviting 15 directs. On each level users
                will get % reward per day.
              </p>
            </div>
            <div className="max-w-[400px]  md:mt-0 mx-auto md:mx-0">
              <img src="/Group9410.svg" className="featuresBoxsss2" />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item py-8 px-8 p-6 md:flex md:space-x-10 justify-around"
          >
            <div className="max-w-[400px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/dashboard.png" />
            </div>
            <div className="md:w-1/2 ">
              <h3 className="text-3xl font-bold mt-5 md:mt-0  text-black ">
                {" "}
                <span className="text-[#b96c33]">Smart Profit-X </span>dashboard
              </h3>
              <p className="text-black mt-3 max-w-[350px]">
                Easy to use and user friendly dashboard to keep the track of
                your team, purchase, incomes and much more.
              </p>
              <ul className="mt-5 dashboard_ul  text-black">
                <li className=" text-black">View level income</li>
                <li className=" text-black">
                  Track of missed, received, spilled, freezed rewards
                </li>
                <li className=" text-black">Wallet connectivity</li>
                <li className=" text-black">Web3 integrated with security</li>
              </ul>
              <button className="border  text-black border-[#b96c33] px-5 mt-6 py-2 rounded-full">
                Go to dashboard
              </button>
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="roadmap_title">
              <h2>Smart Profit-X Roadmap</h2>
            </div>
            <div className="roadmap_view">
              <img className="dashbord_view_roadmap" src="/Group 18.svg"></img>
              <img className="mobile_view_roadmap" src="/Group 19.png"></img>
            </div>
          </div>

          <div className="mt-8" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="box_small bg-white rounded-2xl p-6 new_border">
                <img className="w-10" src="/dh1.svg" />
                <h3 className="text-lg mt-3  text-black">
                  SPX-Decentralized Exchange
                </h3>
                <p className="mt-2 text-black">
                  Superfast matching engine with optimum security for the
                  traders will be launched in Jan 2025. DH Exchange will
                  initially support 8 networks.
                </p>
              </div>
              <div className="box_small bg-white rounded-2xl p-6 new_border">
                <img className="w-10" src="/dh2.svg" />
                <h3 className="text-lg mt-3  text-black">
                  SPX-Tradeable Token
                </h3>
                <p className="mt-2 text-black">
                  ERC20 Standard token with burning mechanism will be deployed
                  on Binance smart chain with an initial price of 0.3$.
                </p>
              </div>
              <div className="box_small bg-white rounded-2xl p-6 new_border">
                <img className="w-10" src="/dh3.svg" />
                <h3 className="text-lg mt-3  text-black">SPX- Flash loan</h3>
                <p className="mt-2 text-black">
                  New flash loan plan for all SPX users will be launched, which
                  will have many more interesting features in addition to
                  current plans.
                </p>
              </div>
              <div className="box_small bg-white rounded-2xl p-6 new_border">
                <img className="w-10" src="/dh4.svg" />
                <h3 className="text-lg mt-3  text-black">
                  SPX-Tradeable Token
                </h3>
                <p className="mt-2 text-black">
                  ERC20 Standard token with burning mechanism will be deployed
                  on Binance smart chain with an initial price of 0.3$.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
