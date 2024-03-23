"use client"
import Image from "next/image";
import Homepage from "./_pages/Homepage";
import Sidebar from "./_components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [shift,setShift] =useState('');
  const handleShift=(val)=>{
    setShift(val);
  }
  return (
    <>
    <Sidebar data={handleShift}
    />
      <Homepage shift={shift}/>
      </>
  );
}
