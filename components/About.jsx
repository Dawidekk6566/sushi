import React, { useEffect, useState } from "react";
import Image from "next/image";

const About = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };
  return (
    <section className="pt-64 pb-28 bg-[#FFF2F5] w-full flex justify-center">
      <div className="max-xl:flex-col flex items-center max-w-[1200px] m-auto px-8">
        <Image
          className="object-cover rounded-b-[45px] h-[50rem]"
          src={"/exotic-food.png"}
          width={363}
          height={700}
        ></Image>
        <div className="flex-col text-center flex items-center justify-between mx-4 h-max">
          <h2
            style={Lato}
            className="text-[#88112B] italic leading-[135%] text-8xl font-extrabold text-center mb-11 mt-12 max-md:text-5xl"
          >
            Jedzenie <span className="font-normal">oraz </span> <br></br>
            koktajle
          </h2>
          <span
            style={Poppins}
            className="leading-loose text-[#2D060ED9]/85 px-6 text-xl mb-11"
          >
            Odkryj niepowtarzalną kulinarną magię Japonii w naszej restauracji
            Sushi w Dłoń. Spróbuj naszych mistrzowsko przygotowanych sushi i
            pokebowlów, które przeniosą Cię w magiczny świat smaków.
          </span>
          <div className="">
            <button
              style={Poppins}
              className="bg-[#F8D9DF] active:scale-75 hover:ease-in-out hover:bg-[#ffedf1] hover:duration-300 mb-8 py-4 px-12 text-[#88112B] font-bold hover:cursor-pointer"
            >
              Poznaj nas lepiej
            </button>
          </div>
        </div>
        <Image
          className="object-cover rounded-t-[45px] h-[50rem]"
          src={"/coctail.png"}
          width={376}
          height={668}
        ></Image>
      </div>
    </section>
  );
};

export default About;
