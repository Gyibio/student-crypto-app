import Hero1 from "../assets/Hero1.avif";
import { coinData } from "../data/coins";
import { useState } from "react";
import CryptoRow from "../components/crypto/CryptoRow";
import { CommonButton } from "../components/common/Fbutton";
import hero3 from "../assets/Hero3.avif";
import hero4 from "../assets/Hero4.avif";
import hero5 from "../assets/Hero5.avif";
import hero61 from "../assets/Hero61.png";
import hero62 from "../assets/Hero62.png";
import hero63 from "../assets/Hero63.png";
import hero7 from "../assets/hero7.avif";
import Footer from "../components/layouts/Footer";

import logo from "../assets/logo.svg";
import Navbar from "../components/layouts/Navbar";
function Home() {
  const articles = [
    {
      id: 1,
      image: hero61,
      title: "USDC: The digital dollar for the global crypto economy",
      description:
        "Coinbase believes crypto will be part of the solution on open financial system that is both more efficient and more",
    },
    {
      id: 2,
      image: hero62,
      title: `Can crypto really replace your bank account`,
      description:
        "If you're a big enough  fan of crypto, you've probably heard the phrase 'be your own bank' or the term 'bankless... ",
    },
    {
      id: 3,
      image: hero63,
      title: "When is the best time to invest in crypto",
      description:
        "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of...",
    },
  ];
  const [activeTab, setActiveTab] = useState("tradable");

  const tabs = [
    { id: "tradable", label: "Tradable" },
    { id: "gainers", label: "Top gainers" },
    { id: "new", label: "New on Coinbase" },
  ];
  return (
    <div>
        <Navbar/>
      <div className="lg:grid-cols-2 grid grid-cols-1 gap-10 p-5 items-center lg:mt-10">
        <div className="order-2 lg:order-1">
          <img className="rounded-4xl" src={Hero1} />
          <div className="mt-1 opacity-60 text-[15px] tracking-wide">
            Stocks and prediction market not available in your jurisdition
          </div>
        </div>

        <div
          className="order-1 lg:order-2 flex flex-col gap-3 "
          onSubmit={() => e.preventDefault()}
        >
          <div className="lg:text-[80px]  text-5xl leading-tight ">
            The future of <br />
            finance is here.
          </div>
          <div className="leading-normal text-[20px]">
            Trade crypto and more on a platform you can trust
          </div>
          <form className="flex flex-col gap-4 lg:flex-row">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="w-full lg:w-91 px-4 py-3 border border-gray-400 rounded-lg text-lg focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052FF] outline-none transition-all placeholder:text-gray-400"
            />
            <button className="bg-[#0052FF] text-white px-10 py-4   rounded-full font-bold text-[18.5px] lg:text-[16.5px] hover:bg-blue-700 transition-all">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className=" gap-8 p-5 grid lg:grid-cols-2 grid-cols-1 pt-15 bg-[#f0f0f0] items-center">
        <div className="flex  flex-col gap-4">
          <div className="text-4xl lg:text-5xl font-[490] ">
            Explore crypto like Bitcoin,
            <br /> Ethereum, and Dogecoin.
          </div>
          <div className="opacity-60 text-[17px] tracking-wide">
            Simply and securely buy, sell, and, manage hundreds of
            cryotocurrencies.
          </div>
          <CommonButton text="See more assets" />
        </div>

        {/*Tab buttons */}
        <div className="bg-black rounded-3xl text-white flex flex-col py-5 md:px-8 md:py-8 ">
          <div className="flex p-5 ml- font-medium md:text-[18px] ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`hover:bg-[#121212] py-3 px-8 rounded-4xl transition-all relative ${activeTab === tab.id ? "bg-[#2f2f2f] hover:bg-[#383838]" : "text-white hover:bg-[#1c1c1c]"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {coinData[activeTab].map((coin) => (
            <CryptoRow key={coin.id} {...coin} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 px-5 gap-8">
        <img src={hero3} className="lg:w-130 rounded-[52px] lg:ml-30 " />
        <div className="flex  flex-col gap-4">
          <div className="text-4xl lg:text-5xl font-[490] ">
            Powerful tools, designed
            <br /> for the advanced trader.{" "}
          </div>
          <div className="opacity-60 text-[17px] tracking-wide">
            Powerful analytical tools with the safety and security of Coinbase
            <br /> deliver the ultimate trading experience. Tap into
            sophisticated
            <br /> charting capabilities, real-time order books, and deep
            liquidity
            <br /> across hundreds of markets.
          </div>
          <CommonButton text="Start trading" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 px-5 gap-8">
        <div className="flex  flex-col gap-4 lg:ml-30">
          <div className="flex gap-1 items-center justify-center border w-39 py-1 rounded-xl border-[#bcbcbc]">
            <img src={logo} className="size-5" />
            <div>COINBASE ONE</div>
          </div>
          <div className="text-4xl lg:text-5xl font-[490] ">
            Zero trading fees,
            <br /> more rewards.{" "}
          </div>
          <div className="opacity-60 text-[17px] tracking-wide">
            Get more out of crypto with one membership: zero trading fees,
            <br /> boosted rewards, priority support, and more.
          </div>
          <CommonButton text="Claim free trial" />
        </div>
        <div className=" flex items-center justify-center lg:w-135 bg-[#f0f0f0] rounded-[52px] ">
          <img src={hero4} className="lg:w-110" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 px-5 gap-8 lg:gap-0">
        <div className=" flex items-center justify-center ">
          <img src={hero5} className="lg:w-130  bg-[#f0f0f0] rounded-[52px]" />
        </div>

        <div className="flex  flex-col gap-4 ">
          <div className="flex gap-1 items-center justify-center border w-28 py-1 rounded-xl border-[#bcbcbc]">
            <img src={logo} className="size-5" />
            <div>BASE APP</div>
          </div>
          <div className="text-4xl lg:text-5xl font-[490] ">
            Countless ways to earn
            <br /> crypto with the Base App.
          </div>
          <div className="opacity-60 text-[17px] tracking-wide">
            An everything app to trade, create, discover, and chat, all in one
            <br /> place.{" "}
          </div>
          <CommonButton text="Learn more" />
        </div>
      </div>

      <div className="flex flex-col bg-[#f0f0f0] mt-20 px-5 lg:px-30 pb-20 gap-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 items-center gap-3">
          <div className="text-5xl w-120 lg:text-6xl font-medium">
            New to crypto?, Learn some crypto basics
          </div>
          <div className="flex flex-col gap-4">
            <div className="opacity-60 text-[18px] tracking-wide">
              Beginner guides, practical tips, and market updates for
              <br />
              first-timers, experienced investors, and everyone in
              <br /> between
            </div>
            <CommonButton text="Read More" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 ">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col gap-4">
              <img
                src={article.image}
                className="rounded-4xl w-90 lg:h-55 h-45 object-cover"
              />
              <div className="lg:w-90 font  text-2xl lg:text-4xl">
                {article.title}{" "}
              </div>
              <div className="lg:w-90 opacity-60 text-[17px] text-sm leading-relaxed">
                {article.description}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:grid-cols-2 grid grid-cols-1 gap-10 p-5 items-center lg:mt-10">
        <div
          className="lg:ml-10 flex flex-col gap-3 "
          onSubmit={() => e.preventDefault()}
        >
          <div className=" lg:text-[80px]  text-5xl leading-tight lg:w-130">
            Take control of your money{" "}
          </div>
          <div className="leading-normal text-[20px]">
            Start your portfolio today and discover crypto{" "}
          </div>
          <form className="flex flex-col gap-4 lg:flex-row">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="w-full lg:w-91 px-4 py-3 border border-gray-400 rounded-lg text-lg focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052FF] outline-none transition-all placeholder:text-gray-400"
            />
            <button className="bg-[#0052FF] text-white px-10 py-4   rounded-full font-bold text-[18.5px] lg:text-[16.5px] hover:bg-blue-700 transition-all">
              Sign up
            </button>
          </form>
        </div>
        <div className>
          <img className="rounded-4xl" src={hero7} />
        </div>
      </div>
      <div className="flex flex-col lg:justify-center items-center gap-5 mt-50">
        <div className="opacity-60 lg:text-[15px] text-[14px] ">DEX trading is offered by Coinbase Bermuda Technologies Ltd.</div>
        <div className="lg:w-250 opacity-60 text-center text-[14px] tracking-wide lg:text-[15px] lg:px-0 px-4">
          Products and features may not be available in all regions. Information
          is for or informational purposes only, and is not (i) an offer, or
          solicitation of an offer, to invest in, or to buy or sell, any
          interests or shares, or to participate in any investment or trading
          strategy or (ii) intended to provide accounting, legal, or tax advice,
          or investment recommendations. Trading cryptocurrency comes with risk.
        </div>
      </div>
          <Footer/>
    </div>
  );
}

export default Home;
