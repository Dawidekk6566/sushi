import React, { useEffect, useState } from "react";
import Image from "next/image";

const Contact = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };
  return (
    <section className="bg-white w-screen h-max py-24 grid grid-cols-2 max-xl:grid-cols-1">
      <div className="flex-col flex-1 max-xl:w-full max-xl:flex max-xl:justify-center max-w-[1200px] mx-24">
        <h2
          style={Lato}
          className="text-[#88112B] text-[56px] w-max max-xl:text-4xl max-xl:flex max-xl:justify-center max-xl:w-full max-xl:text-center"
        >
          Chcesz dokonać <br></br> rezerwacji lub masz <br></br> pytania? Napisz
          do nas
        </h2>
        <div className="flex-col flex my-8 max-xl:items-center">
          <label
            style={Poppins}
            className="text-xs w-96 max-xl:w-auto font-bold flex-col uppercase py-4 px-6 border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Imię i nazwisko
            <input
              className="bg-transparent w-full outline-none border-none mt-4 text-black font-bold text-lg"
              type="text"
              placeholder="Wpisz Imię i Nazwisko"
            />
          </label>
          <label
            style={Poppins}
            className="text-xs w-96 max-xl:w-auto font-bold flex-col uppercase py-4 px-6 border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Adres E-mail
            <input
              className="bg-transparent w-full flex-wrap outline-none border-none mt-4 text-black font-bold text-lg"
              type="text"
              placeholder="Wpisz adres Email"
            />
          </label>
          <label
            style={Poppins}
            className="text-xs font-bold flex-col uppercase py-4 px-6 max-xl:w-auto w-96 border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Temat wiadomości
            <input
              className="bg-transparent w-full outline-none border-none mt-4 font-bold text-lg"
              type="text"
              placeholder="Wpisz tutaj temat wiadomości"
            />
          </label>
          <label
            style={Poppins}
            className="pb-16 pt-4 text-xs font-bold flex-col uppercase px-6 max-xl:w-auto w-96 border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Treśc wiadomości
            <input
              className="bg-transparent w-full h-full outline-none border-none mt-4 font-bold text-lg"
              type="text"
              placeholder="Wpisz tutaj treść wiadomości"
            />
          </label>
          <label
            style={Poppins}
            className="flex max-lg:w-auto mt-6 items-center"
            htmlFor="text"
          >
            <input
              style={Poppins}
              className="h-6 w-6 mr-6 bg-transparent outline-none"
              type="checkbox"
            />
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Ultricies sed dui
              ullamcorper aliquam. Blandit scelerisque faucibus id quisque
              tincidunt. Ullamcorper.
            </span>
          </label>
          <label
            style={Poppins}
            className="flex max-lg:w-auto mt-6 items-center"
            htmlFor="text"
          >
            <input
              style={Poppins}
              className="h-6 w-6 mr-6 bg-transparent outline-none"
              type="checkbox"
            />
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Ultricies sed dui
              ullamcorper aliquam. Blandit scelerisque faucibus id quisque
              tincidunt. Ullamcorper.
            </span>
          </label>
        </div>
        <div className="flex w-1/2 justify-end max-xl:w-full max-xl:justify-center">
          <button
            style={Poppins}
            className="bg-[#F9CED7] active:scale-75 hover:ease-in-out hover:bg-[#ffedf1] hover:duration-300 rounded-[15px] py-[10px] px-12 max-w-40 w-40 font-bold text-lg"
          >
            Wyślij
          </button>
        </div>
      </div>
      <div className="flex-2 max-md:ml-0 pt-16 max-w-[1200px] mx-8">
        <h1
          style={Lato}
          className="text-6xl font-extrabold text-[#88112B] max-xl:justify-center max-xl:flex max-xl:text-center"
        >
          Nasze lokale
        </h1>
        <div className="flex w-full justify-between my-8 max-xl:flex-col max-xl:items-center max-xl:text-center">
          <div className="mb-16 max-xl:mb-8">
            <p style={Lato} className="text-3xl font-light text-[#5B0B1C]">
              Sushi dłoń Górna
            </p>
            <span style={Poppins} className="text-sm font-normal">
              +48 000 000 000
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Łódź 90-419
            </span>
          </div>
          <div>
            <p style={Lato} className="text-3xl text-[#5B0B1C]">
              Sushi dłoń Śródmieście
            </p>
            <span style={Poppins} className="text-sm font-normal">
              +48 000 000 000
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Łódź 90-419
            </span>
          </div>
        </div>
        <div className="flex justify-between my-8 max-xl:flex-col max-xl:items-center max-xl:text-center">
          <div className="max-xl:mb-8">
            <p style={Lato} className="text-3xl text-[#5B0B1C]">
              Sushi dłoń Teofilów
            </p>
            <span style={Poppins} className="text-sm font-normal">
              +48 000 000 000
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Łódź 90-419
            </span>
          </div>
          <div className="m-auto">
            <p style={Lato} className="text-3xl text-[#5B0B1C]">
              Sushi dłoń Centrum
            </p>
            <span style={Poppins} className="text-sm font-normal">
              +48 000 000 000
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span style={Poppins} className="text-sm font-normal">
              Łódź 90-419
            </span>
          </div>
        </div>
        <iframe
          className="mt-20 rounded-xl object-cover max-xl:flex max-xl:justify-center"
          src="https://my.atlist.com/map/bae7198f-9d20-4c6d-b0af-7c1c9fbc85e3?share=true"
          width="100%"
          height="400px"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
