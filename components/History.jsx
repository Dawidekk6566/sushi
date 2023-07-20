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
    <section className="bg-[#FCE8EC] w-full px-8 py-24 max-w-[1200px] m-auto">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="flex w-full relative flex-col"
      >
        <Image
          src="/wraps.png"
          width={1200}
          height={400}
          className="w-full relative max-md:h-96 object-cover rounded-t-[55px]"
        ></Image>
        <h1
          style={Lato}
          className="xl:absolute block text-center max-lg:text-center left-1/4 top-1/3 font-bold text-[#88112B] leading-none text-[10rem] max-lg:text-[5rem]"
        >
          <span class="max-xl:float-right top-48 max-lg:top-16 max-lg:left-12 left-32 xl:absolute">
            historia
          </span>
          <span class="max-xl:float-left">Nasza</span>
        </h1>
        <div className="w-full flex justify-center">
          <span
            style={Poppins}
            className="leading-[180%] text-lg text-[#88112B] text-center mt-24 mx-16 max-w-[45rem]"
          >
            Lorem ipsum dolor sit amet consectetur. Tincidunt platea viverra
            maecenas ridiculus eget nunc at. Purus nisi ullamcorper massa quis
            tortor a. Enim mollis eu justo sed blandit. Semper luctus nunc nunc
            integer. Eros vitae tristique massa lectus. Nunc congue fermentum
            amet turpis mi aliquam. Non proin quis adipiscing viverra neque
            cras. Augue turpis integer fringilla imperdiet tellus amet at
            libero. Tincidunt integer vulputate magna viverra nec neque nec.
          </span>
        </div>
      </div>
      <div className="flex mt-24 gap-[2rem] w-full justify-center max-xl:flex-col max-xl:items-center">
        <Image
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          src="/wraps-2.png"
          className="object-cover rounded-[42px]"
          width={400}
          height={600}
        ></Image>
        <Image
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          src="/wraps.png"
          className="object-cover h-[600px] rounded-[42px]"
          width={400}
          height={600}
        ></Image>
        <Image
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          src="/salad.png"
          className="object-cover rounded-[42px]"
          width={400}
          height={600}
        ></Image>
      </div>
      <div className="w-full h-full flex justify-between items-center max-xl:flex-col mt-16">
        <h2
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          style={Lato}
          className="text-[#88112B] mb-16 font-bold text-[10rem] max-lg:text-[5rem]"
        >
          Rolki <br></br> w dłoń
        </h2>
        <span
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          style={Poppins}
          className="xl:w-1/2 max-md:w-full pl-16 text-xl leading-[180%] text-[#88112B]"
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
      <div className="mt-[9rem] w-full h-full flex max-xl:flex-col max-xl:items-center xl:items-end xl:relative">
        <Image
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="h-full"
          src="/bowl.png"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "33rem", height: "42rem" }}
        ></Image>
        <h2
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          style={Lato}
          className="leading-[85%] 2xl:text-[11rem] text-[10rem] max-lg:text-[7rem] text-right max-xl:text-center font-bold text-[#88112B] italic xl:absolute right-0 top-24 my-16"
        >
          Rozbudowa menu
        </h2>
        <span
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          style={Poppins}
          className="text-[#88112B] leading-[180%] ml-[3.5rem]"
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
      <Image
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="w-full mt-[4.5rem] object-cover rounded-b-[55px]"
        src="/dania.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: "45rem" }}
      ></Image>
    </section>
  );
};

export default History;
