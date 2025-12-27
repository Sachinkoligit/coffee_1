"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [list, setList] = useState(1);
  return (
    <>
      {/* TOP SECTION */}
      <section className="relative max-w-93.75 h-70 w-full bg-linear-to-tr from-[#313131] to-[#111111] mx-auto p-4 flex flex-col gap-6">
        {/* STATUS BAR */}
        <header className="w-full flex justify-between items-center">
          <span className="text-white">9:41</span>
          <div className="flex gap-2 items-center">
            <Image src="/signal.png" width={17} height={10} alt="signal" />
            <Image src="/wifi.png" width={15} height={10} alt="wifi" />
            <Image src="/battery.png" width={24} height={11} alt="battery" />
          </div>
        </header>

        {/* LOCATION */}
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-[#A2A2A2]">Location</span>
          <div className="flex justify-between items-center">
            <h2 className="text-[14px] font-semibold text-[#D8D8D8]">
              Bilzen, Tanjungbalai
            </h2>
            <Image src="/icon.png" width={24} height={11} alt="icon" />
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 bg-[#2A2A2A] p-4 rounded-xl flex-1">
            <Image src="/Search.png" width={17} height={17} alt="search" />
            <span className="text-[14px] text-[#A2A2A2]">Search coffee</span>
          </div>
          <button className="w-13 h-13 rounded-xl bg-[#C67C4E] flex items-center justify-center">
            <Image src="/Group.png" width={20} height={20} alt="filter" />
          </button>
        </div>

        {/* BANNER (HALF OUTSIDE) */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-18 w-full max-w-81.75 h-36 rounded-2xl overflow-hidden">
          <Image src="/banner.png" fill className="object-cover" alt="banner" />

          {/* OVERLAY CONTENT */}
          <div className="absolute top-4 left-6 flex flex-col gap-2">
            <div className="bg-[#ED5151] px-2 py-1 rounded-lg w-fit">
              <span className="text-white text-[14px] font-semibold">
                Promo
              </span>
            </div>

            <span className="text-white text-[32px] font-semibold leading-[0.95] bg-[#111111]/80 px-2 box-decoration-clone">
              Buy one get <br />
              one FREE
            </span>
          </div>
        </div>
      </section>

      {/* NEXT SECTION (SPACE FOR OVERLAP) */}
      <section className="mt-24 max-w-93.75 mx-auto px-4">
        <div className="max-w-81.75 w-full mx-auto flex flex-col gap-4">
          <ul className="w-full flex justify-between items-center">
            <li className="max-w-21.75 w-full flex justify-center">
              <button
                onClick={() => setList(1)}
                className={`${
                  list === 1
                    ? "bg-[#C67C4E] py-1 px-2 rounded-md font-semibold text-white"
                    : ""
                } text-[14px]`}
              >
                All Coffee
              </button>
            </li>
            <li className="max-w-21.75 w-full flex justify-center">
              <button
                onClick={() => setList(2)}
                className={`${
                  list === 2
                    ? "bg-[#C67C4E] py-1 px-2 rounded-md font-semibold text-white"
                    : ""
                } text-[14px]`}
              >
                Machiato
              </button>
            </li>
            <li className="max-w-21.75 w-full flex justify-center">
              <button
                onClick={() => setList(3)}
                className={`${
                  list === 3
                    ? "bg-[#C67C4E] py-1 px-2 rounded-md font-semibold text-white"
                    : ""
                } text-[14px]`}
              >
                three
              </button>
            </li>
            <li className="max-w-21.75 w-full flex justify-center">
              <button
                onClick={() => setList(4)}
                className={`${
                  list === 4
                    ? "bg-[#C67C4E] py-1 px-2 rounded-md font-semibold text-white"
                    : ""
                } text-[14px]`}
              >
                four
              </button>
            </li>
          </ul>

          <div className="w-full grid grid-cols-2 gap-3.75 mb-19">
            {/* card1 */}
            <div className="max-w-39 w-full p-2 bg-[#FFFFFF]">
              <div className="w-full">
                <Image
                  src="/coffee1.png"
                  width={140}
                  height={128}
                  alt="coffee1"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="max-w-25.75 w-full flex flex-col gap-1">
                  <h2 className="text-[16px] font-semibold text-[#242424]">
                    Caffe Mocha
                  </h2>
                  <p className="text-[12px] text-[#A2A2A2]">Deep Foam</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-[18px] font-semibold text-[#050505]">
                    $ 4.53
                  </h3>
                  <button className="h-8 w-8 bg-[#C67C4E] rounded-lg p-2">
                    <Image src="/plus.png" width={16} height={16} alt="plus" />
                  </button>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div className=" max-w-39 w-full p-2 bg-[#FFFFFF]">
              <div className="w-full relative">
                <Image
                  src="/coffee2.png"
                  width={140}
                  height={128}
                  alt="coffee1"
                />
                <div
                  className="absolute top-0 flex justify-center gap-1 items-center  right-0 h-7 rounded-tr-xl rounded-bl-3xl  max-w-12.75 w-full "
                  style={{
                    background:
                      "linear-gradient(240.86deg, rgba(17, 17, 17, 0.3) 0%, rgba(49, 49, 49, 0.3) 100%)",
                  }}
                >
                  <Image src="/Star.png" alt="star" height={12} width={12} />
                  <p className="text-[8px] font-semibold text-white">4.8</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="max-w-25.75 w-full flex flex-col gap-1">
                  <h2 className="text-[16px] font-semibold text-[#242424]">
                    Flat White
                  </h2>
                  <p className="text-[12px] text-[#A2A2A2]">Espresso</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-[18px] font-semibold text-[#050505]">
                    $ 3.53
                  </h3>
                  <button className="h-8 w-8 bg-[#C67C4E] rounded-lg p-2">
                    <Image src="/plus.png" width={16} height={16} alt="plus" />
                  </button>
                </div>
              </div>
            </div>

            {/* card3 */}
            <div className="max-w-39 w-full p-2 bg-[#FFFFFF]">
              <div className="w-full">
                <Image
                  src="/coffee1.png"
                  width={140}
                  height={128}
                  alt="coffee1"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="max-w-25.75 w-full flex flex-col gap-1">
                  <h2 className="text-[16px] font-semibold text-[#242424]">
                    Caffe Mocha
                  </h2>
                  <p className="text-[12px] text-[#A2A2A2]">Deep Foam</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-[18px] font-semibold text-[#050505]">
                    $ 4.53
                  </h3>
                  <button className="h-8 w-8 bg-[#C67C4E] rounded-lg p-2">
                    <Image src="/plus.png" width={16} height={16} alt="plus" />
                  </button>
                </div>
              </div>
            </div>

            {/* card4 */}
            <div className="max-w-39 w-full p-2 bg-[#FFFFFF]">
              <div className="w-full">
                <Image
                  src="/coffee1.png"
                  width={140}
                  height={128}
                  alt="coffee1"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="max-w-25.75 w-full flex flex-col gap-1">
                  <h2 className="text-[16px] font-semibold text-[#242424]">
                    Caffe Mocha
                  </h2>
                  <p className="text-[12px] text-[#A2A2A2]">Deep Foam</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-[18px] font-semibold text-[#050505]">
                    $ 4.53
                  </h3>
                  <button className="h-8 w-8 bg-[#C67C4E] rounded-lg p-2">
                    <Image src="/plus.png" width={16} height={16} alt="plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="max-w-93.75 w-full bg-[#FFFFFF] p-6 flex justify-evenly items-center fixed left-1/2 -translate-x-1/2 bottom-0">
            <Image src="/Home.png" width={24} height={24} alt="home" />
            <Image src="/heart.png" width={24} height={24} alt="left" />
            <Image src="/bag.png" width={24} height={24} alt="left" />
            <Image src="/bell.png" width={24} height={24} alt="left" />
          </div>
        </div>
      </section>
    </>
  );
}
