"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Fish from "../public/fish.png";
import Ramen from "../public/ramen.png";

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

function FiMenu(props) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      {...props}
    >
      <line x1={3} y1={12} x2={21} y2={12} />
      <line x1={3} y1={6} x2={21} y2={6} />
      <line x1={3} y1={18} x2={21} y2={18} />
    </svg>
  );
}

function AiOutlineClose(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}

export default function Page() {
  const [image, setImage] = useState("/fish.png");
  const [text, setText] = useState("1/2");
  const [text2, setText2] = useState("2/2");
  const [header, setHeader] = useState("Funky Sushi");
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

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const lenis = new Lenis();

    const handleScroll = (e) => {
      console.log(e);
    };

    lenis.on("scroll", handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="flex justify-center">
      <div className="flex-col items-center">
        <nav
          style={Poppins}
          className="h-16 my-8 flex justify-between w-full items-center m-auto px-8 max-w-[1200px]"
        >
          <Image
            src="/Logo.png"
            width={112}
            height={112}
            className="object-contain hover:cursor-pointer"
          ></Image>
          <ul className="flex gap-12 mr-8 items-center max-lg:hidden">
            <li
              className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
            >
              O nas
            </li>
            <li
              className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
            >
              Menu
            </li>
            <li
              className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
            >
              Promocje
            </li>
            <li
              className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
            >
              Kontakt
            </li>
            <button className="bg-white active:scale-75 hover:ease-in-out hover:bg-[#F8D9DF] hover:duration-300 outline-none py-[10px] px-[48px] font-bold text-[#330811] text-lg">
              Zamów
            </button>
          </ul>
          <div onClick={handleNav} className="block lg:hidden mr-24">
            {!nav ? <AiOutlineClose size={20} /> : <FiMenu size={20} />}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-black/80 ease-in-out duration-200"
                : "fixed left-[-100%]"
            }
          >
            <ul className="uppercase ml-12 mt-32 lg:ml-24 md:ml-24">
              <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
                O nas
              </li>
              <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
                Menu
              </li>
              <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
                Promocje
              </li>
              <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
                Kontakt
              </li>
              <button className="bg-white outline-none py-[10px] px-[48px] font-bold text-[#330811] text-lg">
                Zamów
              </button>
            </ul>
          </div>
        </nav>
        <div>
          <section className="flex max-md:flex-col w-full h-full overflow-hidden m-auto max-w-[1200px]">
            <div className="flex-col justify-between max-md:text-center items-center h-full my-8 mx-8">
              <h1
                style={Poppins}
                className="text-7xl mb-8 h-full text-[#88112B] max-lg:text-4xl max-md:m-auto leading-loose"
              >
                Kulinarna
                <span className="text-7xl font-medium italic line-clamp-2 pb-2 max-lg:text-4xl">
                  magia Japonii
                </span>
                w Twojej dłoni
              </h1>
              <span
                style={Poppins}
                className="text-[#2D060E] text-lg max-md:text-md w-auto my-8"
              >
                Odkryj niepowtarzalną kulinarną magię Japoniiw naszej
                restauracji Sushi w Dłoń. Spróbuj naszych mistrzowsko
                przygotowanych sushi i pokebowlów, które przeniosą Cię w
                magiczny świat smaków.
              </span>
            </div>
            <div className="flex mr-16 max-w-[1200px] max-md:m-auto max-md:px-8">
              <Image
                className="h-auto max-w-[550px] max-xl:w-[400px] hero-image rounded-t-2xl object-cover"
                src={"/hero-image.png"}
                width={550}
                height={400}
              ></Image>
            </div>
          </section>
          <section className="pt-64 pb-28 bg-[#FFF2F5] w-full flex justify-center">
            <div className="max-xl:flex-col flex items-center max-w-[1200px] m-auto px-8">
              <Image
                className="object-cover rounded-b-[45px] h-[45rem]"
                src={"/exotic-food.png"}
                width={363}
                height={700}
              ></Image>
              <div className="flex-col text-center flex items-center justify-between mx-4 h-max">
                <h2
                  style={Lato}
                  className="text-[#88112B] leading-[135%] text-8xl font-extrabold text-center mb-11 mt-12 max-md:text-5xl"
                >
                  Jedzenie <span className="font-normal">oraz </span> <br></br>
                  koktajle
                </h2>
                <span
                  style={Poppins}
                  className="leading-loose text-[#2D060ED9]/85 mx-4 text-lg mb-11"
                >
                  Odkryj niepowtarzalną kulinarną magię Japonii w naszej
                  restauracji Sushi w Dłoń. Spróbuj naszych mistrzowsko
                  przygotowanych sushi i pokebowlów, które przeniosą Cię w
                  magiczny świat smaków.
                </span>
                <div className="mt-4">
                  <button
                    style={Poppins}
                    className="bg-[#F8D9DF] active:scale-75 hover:ease-in-out hover:bg-[#ffedf1] hover:duration-300 mb-8 py-4 px-12 text-[#88112B] font-bold hover:cursor-pointer"
                  >
                    Poznaj nas lepiej
                  </button>
                </div>
              </div>
              <Image
                className="object-cover rounded-t-[45px] h-[45rem]"
                src={"/coctail.png"}
                width={376}
                height={668}
              ></Image>
            </div>
          </section>
        </div>

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
                className="absolute inline-block flex-col gap-x-16 max-lg:text-center left-[4rem] top-14 font-bold text-[#88112B]/90 leading-none text-[10rem] max-lg:text-[5rem]"
              >
                {header}
              </h1>
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
              className="mx-[4rem] text-center w-[60%] my-8 max-lg:w-full max-lg:text-center text-[#88112B] font-medium text-xl"
            >
              Lorem ipsum dolor sit amet consectetur. Eget sit diam accumsan
              tortor tempor ornare sed ullamcorper viverra. Netus purus urna
              scelerisque euismod molestie phasellus morbi quis. Tristique nulla
              in morbi.
            </p>
            <button
              style={Poppins}
              className="bg-[#F8D9DF] active:scale-75 hover:ease-in-out hover:bg-[#ffedf1] hover:duration-300 w-64 h-16 text-[#88112B] font-bold hover:cursor-pointer"
            >
              Sprawdź pełną kartę
            </button>
          </div>
        </section>
        <section className="bg-[#FCE8EC] w-full px-8 py-24 max-w-[1200px] m-auto">
          <div className="flex w-full relative flex-col">
            <Image
              src="/wraps.png"
              width={1200}
              height={400}
              className="w-full relative max-md:h-96 object-cover rounded-t-[55px]"
            ></Image>
            <h1
              style={Lato}
              className="absolute mt-[18rem] left-[30%] font-bold text-[#88112B]/90 flex-wrap text-[9rem] max-lg:text-[5rem]"
            >
              Nasza <br></br> historia
            </h1>
            <span
              style={Poppins}
              className="leading-[180%] text-lg text-[#88112B] text-center mt-48 mx-16"
            >
              Lorem ipsum dolor sit amet consectetur. Tincidunt platea viverra
              maecenas ridiculus <br></br> eget nunc at. Purus nisi ullamcorper
              massa quis tortor a. Enim mollis eu justo sed <br></br> blandit.
              Semper luctus nunc nunc integer. Eros vitae tristique massa
              lectus. Nunc congue <br></br>
              fermentum amet turpis mi aliquam. Non proin quis adipiscing
              viverra neque <br></br> cras. Augue turpis integer <br></br>{" "}
              fringilla imperdiet tellus amet at libero. Tincidunt integer
              vulputate magna viverra nec neque nec.
            </span>
          </div>
          <div className="flex mt-24 gap-[2rem] w-full justify-center max-xl:flex-col max-xl:items-center">
            <Image
              src="/wraps-2.png"
              className="object-cover rounded-[42px]"
              width={400}
              height={600}
            ></Image>
            <Image
              src="/wraps.png"
              className="object-cover rounded-[42px]"
              width={400}
              height={600}
            ></Image>
            <Image
              src="/salad.png"
              className="object-cover rounded-[42px]"
              width={400}
              height={600}
            ></Image>
          </div>
          <div className="w-full h-full flex justify-between items-center max-xl:flex-col">
            <h2
              style={Lato}
              className="text-[#88112B] font-bold text-[10rem] max-lg:text-[5rem]"
            >
              Rolki <br></br> w dłoń
            </h2>
            <span
              style={Poppins}
              className="w-1/2 max-md:w-full pl-16 text-xl leading-[180%] text-[#88112B]"
            >
              Lorem ipsum dolor sit amet consectetur. Tincidunt platea viverra
              maecenas ridiculus eget nunc at. Purus nisi ullamcorper massa quis
              tortor a. Enim mollis eu justo sed blandit. Semper luctus nunc
              nunc integer. Eros vitae tristique massa lectus. Nunc congue
              fermentum amet turpis mi aliquam. Non proin quis adipiscing
              viverra neque cras. Augue turpis integer fringilla imperdiet
              tellus amet at libero. Tincidunt integer vulputate magna viverra
              nec neque nec.
            </span>
          </div>
        </section>
        <section className="bg-white w-screen h-max py-24 grid grid-cols-2 max-xl:grid-cols-1">
          <div className="flex-col flex-1 max-xl:w-full max-xl:flex max-xl:justify-center max-w-[1200px] mx-24">
            <h2
              style={Lato}
              className="text-[#88112B] text-[56px] w-max max-xl:text-4xl max-xl:flex max-xl:justify-center max-xl:w-full max-xl:text-center"
            >
              Chcesz dokonać <br></br> rezerwacji lub masz <br></br> pytania?
              Napisz do nas
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
        <footer className="h-16 w-full bg-[#F8D9DF] flex justify-center items-center">
          <p style={Poppins} className="text-[#88112B] text-sm">
            Wszystkie prawa zastrzeżone <span className="font-bold">(c)</span>{" "}
            2023
          </p>
        </footer>
      </div>
    </main>
  );
}
