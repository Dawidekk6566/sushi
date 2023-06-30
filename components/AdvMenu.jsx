import React, { useEffect, useState } from "react";
import Image from "next/image";

const AdvMenu = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };
  return (
    <section className="bg-[#FCE8EC] h-max w-full m-auto max-w-[1200px]">
      <h1
        style={Lato}
        className="text-[10rem] text-[#88112B] font-bold italic text-center mb-[8rem]"
      >
        Menu
      </h1>
      <div className="w-screen flex max-xl:justify-center min-w-full justify-between max-w-[1200px] max-xl:flex-col max-xl:items-center">
        <div className="flex-col items-stretch">
          <Image
            className="relative"
            src="/ramen.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "25rem", height: "16rem" }}
          ></Image>
          <span
            style={Poppins}
            className="text-[4rem] text-[#88112B] italic absolute translate-x-[25%] translate-y-[-200%] max-lg:translate-x-[50%] max-lg:translate-y-[-150%]"
          >
            Funky sushi
          </span>
          <p
            style={Poppins}
            className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
          >
            Pozycja z menu
          </p>
          <div className="w-full text-center flex-col items-center mt-[2rem]">
            <span style={Poppins} className="text-[#88112B] leading-[180%]">
              Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt platea
              viverra maecenas.
            </span>
            <p
              style={Poppins}
              className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
            >
              89.99 zł
            </p>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col items-stretch">
          <Image
            className="relative"
            src="/ramen.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "25rem", height: "16rem" }}
          ></Image>
          <span
            style={Poppins}
            className="text-[4rem] text-[#88112B] italic absolute translate-x-[70%] translate-y-[-200%]"
          >
            Ramen
          </span>
          <p
            style={Poppins}
            className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
          >
            Pozycja z menu
          </p>
          <div className="w-full text-center flex-col items-center mt-[2rem]">
            <span style={Poppins} className="text-[#88112B] leading-[180%]">
              Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt platea
              viverra maecenas.
            </span>
            <p
              style={Poppins}
              className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
            >
              89.99 zł
            </p>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-between max-xl:justify-center min-w-full max-w-[1200px] mt-[11rem] mb-[15rem] max-xl:flex-col max-xl:items-center">
        <div className="flex-col items-stretch">
          <Image
            className="relative"
            src="/ramen.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "25rem", height: "16rem" }}
          ></Image>
          <span
            style={Poppins}
            className="text-[4rem] text-[#88112B] italic absolute translate-x-[25%] translate-y-[-200%] max-lg:translate-x-[50%] max-lg:translate-y-[-150%]"
          >
            Funky sushi
          </span>
          <p
            style={Poppins}
            className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
          >
            Pozycja z menu
          </p>
          <div className="w-full text-center flex-col items-center mt-[2rem]">
            <span style={Poppins} className="text-[#88112B] leading-[180%]">
              Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt platea
              viverra maecenas.
            </span>
            <p
              style={Poppins}
              className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
            >
              89.99 zł
            </p>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col items-stretch">
          <Image
            className="relative"
            src="/ramen.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "25rem", height: "16rem" }}
          ></Image>
          <span
            style={Poppins}
            className="text-[4rem] text-[#88112B] italic absolute translate-x-[70%] translate-y-[-200%]"
          >
            Ramen
          </span>
          <p
            style={Poppins}
            className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
          >
            Pozycja z menu
          </p>
          <div className="w-full text-center flex-col items-center mt-[2rem]">
            <span style={Poppins} className="text-[#88112B] leading-[180%]">
              Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt platea
              viverra maecenas.
            </span>
            <p
              style={Poppins}
              className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
            >
              89.99 zł
            </p>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
            <p
              style={Poppins}
              className="text-center font-normal mt-[4rem] text-[#88112B] text-[2rem] italic leading-normal"
            >
              Pozycja z menu
            </p>
            <div className="w-full text-center flex-col items-center mt-[2rem]">
              <span style={Poppins} className="text-[#88112B] leading-[180%]">
                Lorem ipsum dolor sit amet consectetur. <br></br> Tincidunt
                platea viverra maecenas.
              </span>
              <p
                style={Poppins}
                className="my-[2rem] pb-[3rem] text-[#88112B] italic text-[2rem] border-[#88112B] border-b-[0.0625rem]"
              >
                89.99 zł
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvMenu;
