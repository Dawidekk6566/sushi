import React, { useEffect, useState } from "react";
import Image from "next/image";

const Slider = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };

  function AiOutlineLeft(props) {
    return (
      <svg
        color="white"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
      </svg>
    );
  }

  function AiOutlineRight(props) {
    return (
      <svg
        color="white"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
      </svg>
    );
  }

  const [image, setImage] = useState("/fish.png");
  const [text, setText] = useState("1/2");
  const [text2, setText2] = useState("2/2");
  const [header, setHeader] = useState(
    "<span class='float-left'>Funky</span> <span class='float-right'>Sushi</span>"
  );
  const [header2, setHeader2] = useState("Ramen");
  const images = ["/fish.png", "/ramen.png"];

  const changeImageRight = () => {
    const currentIndex = images.indexOf(image);
    const nextIndex = (currentIndex + 1) % images.length;
    setImage(images[nextIndex]);
    setText("1/2");
    setHeader2("Funky Sushi");
  };

  const changeImageLeft = () => {
    const currentIndex = images.indexOf(image);
    const nextIndex = (currentIndex + 1) % images.length;
    setImage(images[nextIndex]);
    setText("2/2");
    setHeader("Ramen");
  };
  return (
    <section className="bg-[#FCE8EC] w-full h-max px-8 py-24 max-w-[1200px] m-auto">
      <div className="flex justify-between w-full">
        <p style={Poppins} className="text-[#5B0B1C] font-normal">
          Menu
        </p>
        <p style={Poppins} className="text-[#5B0B1C] font-medium">
          {text}
        </p>
      </div>
      <div className="flex justify-between items-center mt-12 max-lg:flex-col mr-8">
        <button
          onClick={changeImageRight}
          className="w-12 h-12 flex justify-center items-center bg-[#88112B] rounded-md active:scale-75 hover:cursor-pointer"
        >
          <AiOutlineLeft></AiOutlineLeft>
        </button>
        <div className="relative z-10">
          <Image
            className="h-full rybka"
            src={image}
            width={600}
            height={600}
          ></Image>
          <h1
            style={Lato}
            className="slider-header text-slider-header-color italic absolute inline-block flex-col gap-x-16 max-lg:text-center left-0 top-14 font-bold leading-none text-[10rem] max-lg:text-[5rem]"
            dangerouslySetInnerHTML={{ __html: header }}
          ></h1>
        </div>
        <button
          onClick={changeImageLeft}
          className="w-12 h-12 mt-12 flex justify-center items-center bg-[#88112B] rounded-md active:scale-75 hover:cursor-pointer"
        >
          <AiOutlineRight></AiOutlineRight>
        </button>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col max-lg:items-center my-4 mr-8 max-lg:m-auto">
        <p
          style={Poppins}
          className="mx-[4rem] w-[60%] my-8 max-lg:w-full max-lg:text-center text-[#88112B] font-medium text-lg leading-[180%]"
        >
          Lorem ipsum dolor sit amet consectetur. Eget sit diam accumsan tortor
          tempor ornare sed ullamcorper viverra. Netus purus urna scelerisque
          euismod molestie phasellus morbi quis. Tristique nulla in morbi.
        </p>
        <button
          style={Poppins}
          className="bg-[#F8D9DF] d w-64 h-16 text-[#88112B] font-bold hover:cursor-pointer"
        >
          Sprawdź pełną kartę
        </button>
      </div>
    </section>
  );
};

export default Slider;
