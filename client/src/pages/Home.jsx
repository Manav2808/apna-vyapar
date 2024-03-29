import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "../ui/buttons/ConnectWallet";
import Green from "../ui/buttons/Green";
import Features from "../components/landing-page/Features";
import Services from "../components/landing-page/Services";
import MarqueeEffect from "../components/landing-page/MarqueeEffect";
import Footer from "../ui/footer/Footer";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-end mt-6 mr-6">
        <ConnectWallet />
      </div>
      <div className="flex justify-center mt-20">
        <a
          href="https://x.com/0xSarthak13"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-green-200 bg-opacity-80 px-7 py-2 transition-colors hover:bg-green-300 hover:bg-opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            className="h-5 w-5 text-green-700"
          >
            <path
              fill="currentColor"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
            ></path>
          </svg>
          <p className="text-sm font-semibold text-green-700">
            Introducing Apna Vyapar
          </p>
        </a>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <h1 className="z-10 bg-gradient-to-br from-green-900 to-green-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.05em] text-transparent drop-shadow-sm md:text-7xl">
          <div className="flex flex-col">
            <div>Local Business Success</div>
            <div>Stories Begins Here.</div>
          </div>
        </h1>
        <p className="text-center text-gray-500 text-wrap:balance md:text-xl pt-4">
          Bridging Locals to Success 
        </p>
      </div>
      <div className="flex justify-center mt-8 gap-6">
        <Green text="Get Started" />
        {/* <Link to={"/sign-in"}><button className="flex w-24 text-sm items-center justify-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 hover:text-white hover:shadow-md">Login</button></Link> */}
      </div>
      <div className="mt-20 flex justify-center">
        <Features />
      </div>
      <div className="mt-20 flex justify-center">
        <Services />
      </div>
      <div className="my-20">
        <MarqueeEffect />
      </div>
      <div className="my-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
