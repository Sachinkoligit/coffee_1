"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function Onboard() {
  const router = useRouter();
  return (
    <section className="max-w-93.75 w-full mx-auto relative ">
      {/* FIXED HEADER */}
      <div className="h-134 w-93.75 bg-[url('/cup.png')] bg-cover bg-center bg-no-repeat"></div>
      <header
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50
  w-full max-w-93.75
  "
      >
        <div className="w-full flex justify-between items-center p-4">
          <span className="text-white">9:41</span>
          <div className="flex gap-2">
            <Image src="/signal.png" width={17} height={10} alt="signal" />
            <Image src="/wifi.png" width={15} height={10} alt="wifi" />
            <Image src="/battery.png" width={24} height={11} alt="battery" />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div
        className="w-full h-90 shadow-[0_-8px_19px_-4px_#050505]
      p-6 bg-linear-to-b from-[#05050500] via-[#050505] via-0% to-[#050505]
      flex flex-col justify-between"
      >
        <div className="text-center">
          <h1 className="text-[32px] font-semibold text-white">
            Fall in Love with Coffee in Blissful Delight!
          </h1>
          <p className="text-[14px] text-[#A2A2A2]">
            Welcome to our cozy coffee corner, where every cup is a delight for
            you.
          </p>
        </div>

        <div className="max-w-81.75 w-full mx-auto pt-8">
          <button
            onClick={() => router.push("/home")}
            className="w-full bg-[#C67C4E] font-semibold text-[16px]
          rounded-2xl py-4 px-5 text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
