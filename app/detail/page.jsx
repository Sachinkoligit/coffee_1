"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  const [text, setText] = useState(true);
  return (
    <div className="max-w-93.75 w-full mx-auto bg-[#F9F9F9]">
      <section className="max-w-93.75 w-full p-4 flex flex-col gap-4">
        <div className="w-full flex flex-col gap-6">
          <header className="w-full max-w-93.75 flex justify-between items-center  fixed top-0 left-1/2 -translate-x-1/2 z-50 p-4">
            <span className="text-[#242424]">9:41</span>
            <div className="flex gap-2 items-center text-[#242424]">
              <Image src="/signal1.png" width={17} height={10} alt="signal" />
              <Image src="/wifi1.png" width={15} height={10} alt="wifi" />
              <Image src="/battery1.png" width={24} height={11} alt="battery" />
            </div>
          </header>

          <div className="w-full flex justify-between mt-12 items-center">
            <button
              onClick={() => router.push("/home")}
              className="w-11 h-11 p-2.5"
            >
              <Image
                src="/arrowLeft.png"
                width={15.5}
                height={8.5}
                alt="back"
              />
            </button>
            <h1 className="text-[16px] font-semibold text-[#242424]">Detail</h1>
            <button className="w-11 h-11 p-2.5 ">
              <Image src="/heart1.png" width={20} height={19.5} alt="back" />
            </button>
          </div>

          <div className="relative w-full h-50.5">
            <Image
              src="/cup2.png"
              fill
              className="rounded-2xl object-cover"
              alt="coffee cup"
            />
          </div>
        </div>

        <div className="w-full h-21 flex justify-between items-center">
          <div className="max-w-32.25 h-full w-full flex flex-col justify-between">
            <div className="w-full h-12 flex flex-col justify-between">
              <h2 className="text-[20px] font-semibold text-[#242424]">
                Caffe Mocha
              </h2>
              <p className="text-[12px] text-[#A2A2A2]">Ice/Hot</p>
            </div>
            <div className="w-full flex gap-1">
              <Image
                src="/Star.png"
                height={20}
                width={20}
                className="block"
                alt="star"
              />
              <p className="text-[16px] font-semibold text-[#A2A2A2]">
                <span className="text-[16px] font-semibold text-[#2A2A2A]">
                  4.8
                </span>{" "}
                (230)
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <div className="h-11 w-11 p-1.5 flex justify-center items-center">
              <Image
                src="/bike.png"
                height={32}
                width={32}
                className=""
                alt="star"
              />
            </div>
            <div className="h-11 w-11 p-1.5 flex justify-center items-center">
              <Image
                src="/bean.png"
                height={24}
                width={24}
                className=""
                alt="star"
              />
            </div>
            <div className="h-11 w-11 p-1.5 flex justify-center items-center">
              <Image
                src="/milk.png"
                height={24}
                width={24}
                className=""
                alt="star"
              />
            </div>
          </div>
        </div>

        <hr className="max-w-73.75 w-full border-0 h-px bg-[#E3E3E3] mx-auto" />

        <div className="w-full flex flex-col gap-2">
          <h2 className="text-[16px] font-semibold text-[#242424]">
            Description
          </h2>
          {text === true ? (
            <p className="text-[14px] font-light text-[#A2A2A2]">
              A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of fresh milk the fo..{" "}
              <span
                onClick={() => setText((prev) => !prev)}
                className="text-[#C67C4E]"
              >
                Read More
              </span>
            </p>
          ) : (
            <p className="text-[14px] font-light text-[#A2A2A2]">
              A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
              ml of espresso coffee and 85ml of fresh milk the for Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Iste et nobis
              maiores. Molestias ex explicabo aut. Voluptates odit nemo
              consectetur!{" "}
              <span
                onClick={() => setText((prev) => !prev)}
                className="text-[#C67C4E]"
              >
                Read Less
              </span>
            </p>
          )}
        </div>

        <div className="w-full pt-2">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-4">
              <h2 className="text-[16px] font-semibold text-[#242424]">Size</h2>
              <div className="w-full flex justify-between items-center">
                <button className="p-6 rounded-xl w-24 h-10.25 flex justify-center items-center bg-white  border border-[#E3E3E3]">
                  S
                </button>
                <button className="p-6 rounded-xl w-24 h-10.25 flex justify-center items-center bg-[#F9F2ED]  border border-[#C67C4E]">
                  M
                </button>
                <button className="p-6 rounded-xl w-24 h-10.25 flex justify-center items-center bg-white  border border-[#E3E3E3]">
                  L
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-93.75 w-full px-5 py-4 flex justify-between items-center">
        <div className="max-w-19 w-full flex flex-col justify-between items-start">
          <h3 className="text-[#909090] text-[14px]">Price</h3>
          <h2 className="text-[#C67C4E] font-semibold text-[18px]">$ 4.53</h2>
        </div>
        <button
          onClick={() => router.push("/order")}
          className="max-w-54.25 w-full bg-[#C67C4E] py-4 px-5 text-[16px] font-semibold flex justify-center items-center rounded-2xl text-white cursor-pointer"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
