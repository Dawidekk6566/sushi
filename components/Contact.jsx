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
    <section className="bg-white h-max py-24 grid grid-cols-2 max-xl:grid-cols-1">
      <div className="flex-col items-center flex-1 max-xl:w-full max-xl:flex max-xl:justify-center max-w-[1200px] xl:mx-36">
        <h2
          style={Lato}
          className="text-[#88112B] leading-[150%] text-[3.5rem] w-max max-xl:text-4xl max-xl:flex max-xl:justify-center max-xl:w-full max-xl:text-center"
        >
          Chcesz dokonać <br></br> rezerwacji lub masz <br></br> pytania?{" "}
          <br></br> Napisz do nas
        </h2>
        <div className="flex-col flex my-8 max-xl:items-center">
          <label
            style={Poppins}
            className="text-xs leading-[150%] w-full max-xl:w-auto font-bold flex-col uppercase py-4 px-6 border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Imię i nazwisko
            <input
              className="bg-transparent w-full outline-none border-none mt-4 text-[#0C0C0C] font-bold text-lg"
              type="text"
              placeholder="Wpisz Imię i Nazwisko"
            />
          </label>
          <label
            style={Poppins}
            className="text-xs leading-[150%] w-full max-xl:w-auto font-bold flex-col uppercase py-4 px-6 border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Adres E-mail
            <input
              className="bg-transparent w-full outline-none border-none mt-4 text-[#0C0C0C] font-bold text-lg"
              type="text"
              placeholder="Wpisz adres Email"
            />
          </label>
          <label
            style={Poppins}
            className="text-xs leading-[150%] w-full font-bold flex-col uppercase py-4 px-6 max-xl:w-auto border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Temat wiadomości
            <input
              className="bg-transparent w-full outline-none border-none mt-4 text-[#0C0C0C] font-bold text-lg"
              type="text"
              placeholder="Wpisz tutaj temat wiadomości"
            />
          </label>
          <label
            style={Poppins}
            className="pb-16 leading-[150%] pt-4 w-full text-xs font-bold flex-col uppercase px-6 max-xl:w-auto border-none outline-none mb-4 rounded-md bg-[#FCE8ED]"
            htmlFor="text"
          >
            Treśc wiadomości
            <input
              className="bg-transparent w-full h-full outline-none border-none mt-4 text-[#0C0C0C] font-bold text-lg"
              type="text"
              placeholder="Wpisz tutaj treść wiadomości"
            />
          </label>
          <label
            className="flex max-lg:w-auto mt-6 items-center 2xl:w-1/2 max-md:flex max-lg:justify-center"
            htmlFor="text"
          >
            <input
              className="h-6 w-6 mr-6 bg-transparent outline-none"
              type="checkbox"
            />
            <span
              style={Poppins}
              className="text-sm text-[#0C0C0C] leading-[150%] max-lg:w-1/2"
            >
              Lorem ipsum dolor sit amet consectetur. Ultricies sed dui
              ullamcorper aliquam. Blandit scelerisque faucibus id quisque
              tincidunt. Ullamcorper.
            </span>
          </label>
          <label
            className="flex max-lg:w-auto mt-6 items-center 2xl:w-1/2 max-lg:justify-center"
            htmlFor="text"
          >
            <input
              className="h-6 w-6 mr-6 bg-transparent outline-none"
              type="checkbox"
            />
            <span
              style={Poppins}
              className="text-sm text-[#0C0C0C] leading-[150%] max-lg:w-1/2"
            >
              Lorem ipsum dolor sit amet consectetur. Ultricies sed dui
              ullamcorper aliquam. Blandit scelerisque faucibus id quisque
              tincidunt. Ullamcorper.
            </span>
          </label>
        </div>
        <div className="flex w-full justify-end max-xl:w-full max-xl:justify-center">
          <button
            style={Poppins}
            className="bg-[#F9CED7] text-[#5B0B1C] active:scale-75 hover:ease-in-out hover:bg-[#ffedf1] hover:duration-300 rounded-[15px] py-[10px] px-12 max-w-40 w-40 font-bold text-lg"
          >
            Wyślij
          </button>
        </div>
      </div>
      <div className="flex-2 max-lg:items-center max-lg:w-full max-lg:flex-col max-md:ml-0 pt-16 max-w-[1200px] mr-14">
        <h1
          style={Lato}
          className="text-[4rem] font-extrabold text-[#88112B] max-xl:justify-center max-xl:flex max-xl:text-center"
        >
          Nasze lokale
        </h1>
        <div className="flex w-full pr-8 justify-between my-8 max-xl:flex-col max-xl:items-center max-xl:text-center">
          <div className="mb-16 max-xl:mb-8">
            <p
              style={Lato}
              className="text-[2rem] font-light text-[#5B0B1C] mb-[1rem]"
            >
              Sushi dłoń Górna
            </p>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              +48 000 000 000
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Łódź 90-419
            </span>
          </div>
          <div className="mb-16 max-xl:mb-8">
            <p
              style={Lato}
              className="text-[2rem] font-light text-[#5B0B1C] mb-[1rem]"
            >
              Sushi dłoń Śródmieście
            </p>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              +48 000 000 000
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Łódź 90-419
            </span>
          </div>
        </div>
        <div className="flex w-full pr-8 justify-between my-8 max-xl:flex-col max-xl:items-center max-xl:text-center">
          <div className="mb-16 max-xl:mb-8">
            <p
              style={Lato}
              className="text-[2rem] font-light text-[#5B0B1C] mb-[1rem]"
            >
              Sushi dłoń Teofilów
            </p>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              +48 000 000 000
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Łódź 90-419
            </span>
          </div>
          <div className="mb-16 max-xl:mb-8">
            <p
              style={Lato}
              className="text-[2rem] font-light text-[#5B0B1C] mb-[1rem]"
            >
              Sushi dłoń Śródmieście
            </p>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              +48 000 000 000
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Aleja Kosciuszki 22,
            </span>
            <br></br>
            <span
              style={Poppins}
              className="text-sm font-normal leading-[150%]"
            >
              Łódź 90-419
            </span>
          </div>
        </div>
        <div className="max-lg:w-full max-lg:flex max-lg:justify-center">
          <iframe
            src="https://my.atlist.com/map/bae7198f-9d20-4c6d-b0af-7c1c9fbc85e3?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            width="100%"
            height="400px"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
