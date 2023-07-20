import React from "react";
import Image from "next/image";

const Hero = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };

  return (
    <section className="flex max-md:flex-col max-md:items-center w-full overflow-hidden m-auto max-w-[1200px]">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="flex-col w-full justify-between flex max-md:text-center items-center h-full my-8 mx-8"
      >
        <h1
          style={Lato}
          className="text-7xl mb-[2rem] h-full text-[#88112B] max-lg:text-4xl max-md:m-auto leading-[135%]"
        >
          Kulinarna
          <span className="text-7xl font-medium italic line-clamp-2 pb-2 max-lg:text-4xl">
            magia Japonii
          </span>
          w Twojej dłoni
        </h1>
        <span
          style={Poppins}
          className="text-[#2D060E] text-lg max-md:text-md w-auto leading-[180%]"
        >
          Odkryj niepowtarzalną kulinarną magię Japonii <br></br> w naszej
          restauracji Sushi w Dłoń. Spróbuj naszych <br></br> mistrzowsko
          przygotowanych sushi i pokebowlów, które <br></br> przeniosą Cię w
          magiczny świat smaków.
        </span>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="250"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="flex justify-end max-md:w-screen mx-8 max-w-[1200px] max-md:m-auto max-md:justify-center"
      >
        <Image
          className="h-[700px] max-w-[550px] max-xl:w-[400px] rounded-t-2xl object-cover"
          src={"/hero-image.png"}
          width={550}
          height={400}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
