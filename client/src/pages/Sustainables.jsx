import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../components/explore/Checkbox";
import { dummyData } from "../data/dummyData";
import Green from "../ui/buttons/Green";
import profile from "../assets/dummy-profile.svg";
import FormButton from "../ui/buttons/FormButton";
import UserIdContext from "../context/UserIdContext";

const YourItemComponent = ({ id, imgURL, title, description }) => {
  return (
    <Link to={`/item/${id}`} className="no-underline">
      <div className="bg-[#252525] mb-4 p-4 rounded-lg">
        <div className="flex items-center gap-6">
          <div>
            <img src={imgURL} alt={title} className="w-[65px] h-[65px]" />
          </div>
          <div>
            <div className="text-white text-lg font-bold">{title}</div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-6 border border-white/30 rounded-xl w-56 p-4">
      <div>
        <img src={profile} alt="" className="rounded-full w-12 h-12" />
      </div>
      <div className="text-white text-xl font-bold">Hello! ✨</div>
      <div className="flex flex-col gap-2 items-center">
        <div className="text-white text-sm font-medium tracking-wide">
          SARTHAK SHAH
        </div>
        <div className="text-white text-[11px] font-normal">
          sarthakshah123@gmail.com
        </div>
      </div>
      <Green text="Log Out" />
    </div>
  );
};

const Sustainables = () => {
  const [score, setScore] = useState("_");
  const { userId } = useContext(UserIdContext);

  const getScore = () => {
    console.log();
  };

  return (
    <div className="">
      <div className="flex justify-end mt-6 mr-6">
        <Link to={"/register"}>
          <FormButton />
        </Link>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <div className="w-[300px] p-4 bg-[#0F0F0F] rounded-xl">
          <div className="flex justify-center text-xl uppercase font-semibold">
            Filters
          </div>
          <div className="h-[1px] my-3 bg-white/30"></div>
          <div className="flex flex-col items-center gap-2 justify-center font-medium">
            Industry Tags
            <input
              type="search"
              id="default-search"
              class="p-2 mb-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
              placeholder="Search Category"
              required
            />
          </div>
          <div className="flex justify-center">
            <Checkbox />
          </div>
          <div className="h-[1px] my-3 bg-white/30"></div>
        </div>
        <div className="w-[900px] bg-[#0F0F0F] rounded-xl">
          {dummyData.map((item) => (
            <YourItemComponent
              key={item.id}
              id={item.id}
              imgURL={item.imgURL}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="w-[250px] bg-[#0F0F0F] rounded-xl flex flex-col items-center">
          <ProfileCard />
          <div className="flex flex-col justify-center items-center mt-10 gap-6 border border-white/30 rounded-xl w-56 p-4">
            <div>{score} / 100</div>
            <button
              onClick={() => getScore()}
              className="flex text-sm items-center justify-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 hover:text-white hover:shadow-md whitespace-nowrap"
            >
              Calculate Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainables;