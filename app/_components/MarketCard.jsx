import Image from "next/image";
import Link from "next/link";
import React from "react";

const MarketCard = ({img,title,desc}) => {
  return (
    <Link href="#" className="block rounded-lg p-2 md:p-4 shadow-sm shadow-indigo-100 mt-4 mx-10">
  <Image
    alt="Card-1"
    src={img}
    className="h-24 md:h-30 w-full rounded-md object-cover"
    width={400} height={400}
  />

  <div className="mt-2 md:mt-4">
    <h1 className="font-bold text-sm md:text-base pt-1 md:pt-2">{title}</h1>
    <p className="text-black-200 text-xs md:text-sm pt-1 md:pt-2">
     {desc}
    </p>
  </div>
</Link>

  );
};

export default MarketCard;
