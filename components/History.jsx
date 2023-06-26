import React, { useEffect, useState } from "react";
import Image from "next/image";

const History = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };

  const [header, setHeader] = useState(
    "<span class='float-left'>Funky</span> <span class='float-right'>Sushi</span>"
  );
  return (
    <section className="bg-[#FCE8EC] w-full px-8 py-24 max-w-[1200px] m-auto hidden">
      <div className="flex w-full relative flex-col">
        <Image
          src="/wraps.png"
          width={1200}
          height={400}
          className="w-full relative max-md:h-96 object-cover rounded-t-[55px]"
        ></Image>
        <h1
            style={Lato}
            className="absolute block text-center max-lg:text-center left-1/4 top-1/3 font-bold text-[#88112B]/90 leading-none text-[10rem] max-lg:text-[5rem]"
          >
            <span class='float-left top-48 max-lg:top-16 max-lg:left-12 left-32 absolute'>historia</span> <span class='float-right'>Nasza</span>
          </h1>
        <span
          style={Poppins}
          className="leading-[180%] text-lg text-[#88112B] text-center mt-48 mx-16"
        >
          Lorem ipsum dolor sit amet consectetur. Tincidunt platea viverra
          maecenas ridiculus <br></br> eget nunc at. Purus nisi ullamcorper
          massa quis tortor a. Enim mollis eu justo sed <br></br> blandit.
          Semper luctus nunc nunc integer. Eros vitae tristique massa lectus.
          Nunc congue <br></br>
          fermentum amet turpis mi aliquam. Non proin quis adipiscing viverra
          neque <br></br> cras. Augue turpis integer <br></br> fringilla
          imperdiet tellus amet at libero. Tincidunt integer vulputate magna
          viverra nec neque nec.
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
          className="object-cover h-[600px] rounded-[42px]"
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
      <div className="w-full h-full flex justify-between items-center max-xl:flex-col mt-16">
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
          tortor a. Enim mollis eu justo sed blandit. Semper luctus nunc nunc
          integer. Eros vitae tristique massa lectus. Nunc congue fermentum amet
          turpis mi aliquam. Non proin quis adipiscing viverra neque cras. Augue
          turpis integer fringilla imperdiet tellus amet at libero. Tincidunt
          integer vulputate magna viverra nec neque nec.
        </span>
      </div>
    </section>
  );
};

export default History;
