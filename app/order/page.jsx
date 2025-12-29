import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="max-w-93.75 w-full mx-auto border">
        <div className="w-full flex flex-col gap-5">
          <header className="w-full flex justify-between items-center p-3">
            <span className="text-[#242424]">9:41</span>
            <div className="flex gap-2 items-center text-[#242424]">
              <Image src="/signal1.png" width={17} height={10} alt="signal" />
              <Image src="/wifi1.png" width={15} height={10} alt="wifi" />
              <Image src="/battery1.png" width={24} height={11} alt="battery" />
            </div>
          </header>

          <div className="border max-w-47 w-full flex justify-between items-center">
            <button className="w-11 h-11 p-2.5 border flex justify-center items-center">
              <Image
                src="/arrowLeft.png"
                width={15.5}
                height={8.5}
                alt="arrow left"
                className="w-[15.5px] h-[8.5px]"
              />
            </button>
            <h1>Order</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
