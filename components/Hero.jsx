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
    <section className="flex max-md:flex-col w-full overflow-hidden m-auto max-w-[1200px]">
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
          Odkryj niepowtarzalną kulinarną magię Japoniiw naszej restauracji
          Sushi w Dłoń. Spróbuj naszych mistrzowsko przygotowanych sushi i
          pokebowlów, które przeniosą Cię w magiczny świat smaków.
        </span>
      </div>
      <div className="flex mr-16 max-w-[1200px] max-md:m-auto max-md:px-8">
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
