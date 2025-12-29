"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function Onboard() {
  const router = useRouter();
  return (
    <section className="max-w-93.75 w-full mx-auto">
      <div className="w-full h-134">
        <div className='w-full h-134 bg-[url("/cup.png")] bg-cover bg-center bg-no-repeat'>
          <div className="w-full  flex justify-between items-center p-4">
            <div className="max-w-13 w-full  flex justify-center items-center">
              <span className="text-[#FFFFFF]">9:41</span>
            </div>
            <div className="max-w-16.5 w-full ">
              <div className="w-full flex justify-between items-center">
                <Image src="/signal.png" width={17} height={10} alt="img" />
                <Image src="/wifi.png" width={15.27} height={10} alt="img" />
                <Image src="/battery.png" width={24} height={11} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-90 shadow-[0_-8px_19px_-4px_#050505]
 p-6 bg-linear-to-b from-[#05050500] via-[#050505] via-0% to-[#050505] flex flex-col justify-between"
      >
        <div className=" flex flex-col text-center">
          <h1 className="text-[32px] font-semibold text-[#FFFFFF]">
            Fall in Love with Coffee in Blissful Delight!
          </h1>
          <p className="text-[14px] text-[#A2A2A2]">
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </p>
        </div>
        <div className="max-w-81.75 w-full mx-auto pt-8">
          <button
            onClick={() => router.push("/home")}
            className="w-full bg-[#C67C4E] font-semibold text-[16px] rounded-2xl py-4 px-5 text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
