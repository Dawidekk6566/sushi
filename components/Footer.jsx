import React from "react";

const Footer = () => {
  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };
  return (
    <footer className="h-16 w-full bg-[#F8D9DF] flex justify-center items-center">
      <p style={Poppins} className="text-[#88112B] text-sm">
        Wszystkie prawa zastrzeżone <span className="font-bold">(c)</span> 2023
      </p>
    </footer>
  );
};

export default Footer;
