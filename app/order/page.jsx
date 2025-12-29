"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  const [btn, setBtn] = useState(0);
  const [count, setCount] = useState(1);
  return (
    <section className=" max-w-93.75 mx-auto bg-[#F9F9F9] flex flex-col gap-4">
      <div className="max-w-93.75 w-full mx-auto p-3 flex flex-col gap-6">
        <div className="w-full flex flex-col gap-5">
          <header className="max-w-93.75 w-full flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 z-50 p-4">
            <span className="text-[#242424]">9:41</span>
            <div className="flex gap-2 items-center text-[#242424]">
              <Image src="/signal1.png" width={17} height={10} alt="signal" />
              <Image src="/wifi1.png" width={15} height={10} alt="wifi" />
              <Image src="/battery1.png" width={24} height={11} alt="battery" />
            </div>
          </header>

          <div className=" max-w-47 mt-10 w-full flex justify-between items-center">
            <button
              onClick={() => router.push("/detail")}
              className="w-11 h-11 p-2.5  flex justify-center items-center"
            >
              <Image
                src="/leftArrow1.png"
                width={24}
                height={24}
                alt="arrow left"
              />
            </button>
            <h1 className="text-[16px] font-semibold text-[#242424]">Order</h1>
          </div>
        </div>

        <div className="w-full max-w-81.75 mx-auto bg-[#EDEDED] p-1 rounded-xl flex justify-between items-center">
          <button
            onClick={() => setBtn(0)}
            className={`w-38.25 h-8.75 px-6 py-2 ${
              btn === 0
                ? "rounded-lg bg-[#C67C4E] text-[16px] text-white font-semibold"
                : "text-[#242424]"
            }`}
          >
            Deliver
          </button>
          <button
            onClick={() => setBtn(1)}
            className={`w-38.25 h-8.75 px-6 py-2 ${
              btn === 1
                ? "rounded-lg bg-[#C67C4E] text-[16px] text-white font-semibold"
                : "text-[#242424]"
            }`}
          >
            Pick Up
          </button>
        </div>

        <div className="max-w-78.75 w-full mx-auto flex flex-col gap-4">
          <h2 className="font-semibold text-[16px] text-[#242424]">
            Delivery Address
          </h2>

          <div className="w-full flex flex-col gap-1">
            <h3 className="font-semibold text-[#313131] text-[14px]">
              Jl. Kpg Sutoyo
            </h3>
            <p className="text-[12px] text-[#A2A2A2]">
              Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
            </p>
          </div>

          <div className="max-w-57.25 w-full flex justify-between items-center">
            <button className="w-30 border border-[#A2A2A2] bg-white py-1.5 px-3 rounded-2xl flex justify-between items-center">
              <Image src="/edit.png" width={14} height={14} alt="edit" />
              <h4 className="text-[12px] text-[#313131]">Edit Address</h4>
            </button>
            <button className="w-25.25 border border-[#A2A2A2] bg-white py-1.5 px-3 rounded-2xl flex justify-between items-center">
              <Image src="/Note.png" width={14} height={14} alt="edit" />
              <h4 className="text-[12px] text-[#313131]">Add Note</h4>
            </button>
          </div>

          <hr className="max-w-73.75 w-full border-0 h-px bg-[#E3E3E3] mx-auto" />

          <div className="max-w-81.75 w-full mx-auto flex justify-between items-center">
            <div className="max-w-43.25 w-full flex justify-between items-center">
              <Image
                src="/2.png"
                width={54}
                height={54}
                className="rounded-lg"
                alt="coffee cup"
              />
              <div className="flex flex-col">
                <h2 className="text-[16px] font-semibold text-[#242424]">
                  Caffe Mocha
                </h2>
                <p className="text-[#A2A2A2] text-[12px]">Deep Foam</p>
              </div>
            </div>
            <div className="max-w-22.5 w-full flex justify-between items-center">
              <button
                onClick={() => setCount(count - 1)}
                className="p-1 border h-6 w-6 rounded-[20px] border-[#F9F2ED] bg-white flex justify-center items-center"
              >
                -
              </button>
              <h3 className="font-semibold text-[#2A2A2A] text-[14px]">
                {count}
              </h3>
              <button
                onClick={() => setCount(count + 1)}
                className="p-1 border h-6 w-6 rounded-[20px] border-[#F9F2ED] bg-white flex justify-center items-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className=" w-full border-0 h-1 bg-[#F9F2ED] mx-auto" />

      <div className="max-w-81.75 w-full mx-auto bg-white border border-[#EDEDED] rounded-2xl p-4 flex justify-between items-center">
        <div className="w-full max-w-46.25 flex justify-between items-center">
          <Image
            src="/icon3.png"
            width={20}
            height={20}
            className=""
            alt="icon"
          />
          <h2 className="font-semibold text-[14px] text-[#313131]">
            1 Discount is Applies
          </h2>
        </div>
        <Image
          src="/arrowRight.png"
          width={20}
          height={20}
          className=""
          alt="icon"
        />
      </div>

      <div className="pt-2 flex flex-col gap-4 p-4 max-w-81.75 mx-auto w-full">
        <h2 className="font-semibold text-[16px] text-[#242424]">
          Payment Summary
        </h2>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-[14px] text-[#313131]">Price</h2>
            <h3 className="font-semibold text-[#242424]">$ 4.53</h3>
          </div>
          <div className="w-full flex justify-between items-center">
            <h2 className="text-[14px] text-[#313131]">Delivery Fee</h2>
            <div className="max-w-19.25 w-full flex justify-between items-center">
              <h4 className="text-[#2A2A2A] line-through">$ 2.0</h4>
              <h3 className="font-semibold text-[#242424]">$ 1.0</h3>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-6 py-4 w-full  rounded-2xl flex flex-col gap-2 bg-white">
        <div className="max-w-81.75 w-full flex justify-between items-center">
          <div className="max-w-46.5 w-full flex gap-[9.5px] items-center">
            <Image
              src="/Wallet.png"
              width={20}
              height={20}
              className=""
              alt="wallet"
            />
            <div className="flex flex-col justify-between gap-1">
              <h2 className="font-semibold text-[14px] text-[#242424]">
                Cash/Wallet
              </h2>
              <h3 className="font-semibold text-[12px] text-[#C67C4E]">
                $ 5.53
              </h3>
            </div>
          </div>
          <Image
            src="/leftArrow1.png"
            width={24}
            height={24}
            className="-rotate-90 items-end"
            alt="down arrow"
          />
        </div>

        <button className="max-w-81.75 py-4 px-5 bg-[#C67C4E] rounded-[16px] w-full text-[16px] font-semibold text-white">
          Order
        </button>
      </footer>
    </section>
  );
}
