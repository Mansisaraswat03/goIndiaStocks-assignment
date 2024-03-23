"use client"
import React, { useState } from "react";
import MarketCard from "../_components/MarketCard";
import DiscussionCard from "../_components/DiscussionCard";
import { discussion } from "../data/data";
import { market } from "../data/data";
import { menu } from "../data/data";

const Homepage = ({ shift }) => {
  const [state, setState] = useState("Discussion Fourum");

  const handleClick = (val) => {
    setState(val);
  };
  return (
    <>
      {/* full screen  */}
      <div
        className={`hidden lg:grid ${
          shift ? "grid-cols-4" : "grid-cols-3"
        } gap-3`}
      >
        {shift ? <div></div> : ""}
        <div className="col-span-2">
          <h2 className="bg-gray-300 text-red-500 font-bold text-center mt-2 w-4/5 items-center mx-10">
            DISCUSSION FOURM
          </h2>
          {discussion.map((item) => (
            <DiscussionCard
              key={item.id}
              img={item.img}
              name={item.name}
              description={item.description}
              time={item.time}
            />
          ))}
        </div>
        <div className="col-span-1">
          <h2 className="bg-gray-300 text-red-500 font-bold text-center mt-2 w-4/5 items-center mx-10">
            MARKET STORIES
          </h2>
          {market.map((item) => (
            <MarketCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      {/* small screen */}

      <div className="lg:hidden">
        <ul className="flex justify-around gap-0 mt-4 px-8 bg-purple-500">
         {menu.map((item)=>(
          <li onClick={()=>handleClick(item.name)} className={`${state===item.name ?'bg-purple-800 text-white w-30 px-4':''}`}>{item.name}</li>
         ))} 
        </ul>
        {state === "Discussion Fourum"
          ? discussion.map((item) => (
              <DiscussionCard
                key={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                time={item.time}
              />
            ))
          : market.map((item) => (
              <MarketCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
      </div>
    </>
  );
};

export default Homepage;
